const { Client, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, REST, Routes, PermissionFlagsBits, AttachmentBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const mongoose = require('mongoose');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ]
});

// Modele MongoDB
const vouchSchema = new mongoose.Schema({
    userId: String,
    username: String,
    avatar: String,
    title: String,
    rating: Number,
    description: String,
    createdAt: { type: Date, default: Date.now }
});

const Vouch = mongoose.model('Vouch', vouchSchema);

// Połączenie z MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('✅ Połączono z MongoDB');
}).catch(err => {
    console.error('❌ Błąd połączenia z MongoDB:', err);
});

// Komendy slash
const commands = [
    new SlashCommandBuilder()
        .setName('vouch')
        .setDescription('Dodaj opinię')
        .addIntegerOption(option =>
            option.setName('rating')
                .setDescription('Ocena od 1 do 6')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(6))
        .addStringOption(option =>
            option.setName('opis')
                .setDescription('Opis opinii')
                .setRequired(true))
].map(command => command.toJSON());

// Rejestracja komend
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('🔄 Rejestrowanie komend slash...');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );
        console.log('✅ Komendy zarejestrowane!');
    } catch (error) {
        console.error('❌ Błąd rejestracji komend:', error);
    }
})();

client.once('clientReady', () => {
    console.log(`✅ Bot zalogowany jako ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    // Komenda /vouch
    if (commandName === 'vouch') {
        // Sprawdzenie kanału
        if (interaction.channelId !== process.env.VOUCH_CHANNEL_ID) {
            return interaction.reply({ 
                content: `❌ Tej komendy można używać tylko na kanale <#${process.env.VOUCH_CHANNEL_ID}>`,
                flags: 64
            });
        }

        // Sprawdzenie uprawnień (wszyscy mogą używać, ale możesz to zmienić)
        // Jeśli chcesz ograniczyć do ról, odkomentuj poniższe:
        /*
        const allowedRoles = process.env.VOUCH_ROLES.split(',');
        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));
        if (!hasRole) {
            return interaction.reply({ content: '❌ Nie masz uprawnień do używania tej komendy!', ephemeral: true });
        }
        */

        const rating = interaction.options.getInteger('rating');
        const description = interaction.options.getString('opis');

        // Użyj avatara użytkownika który dodaje opinię
        const userAvatar = interaction.user.displayAvatarURL({ size: 256 });

        // Generowanie gwiazdek - emoji które działa wszędzie
        const stars = '⭐'.repeat(rating);

        // Tworzenie embeda
        const embed = new EmbedBuilder()
            .setColor('#c300ff')
            .setDescription(`${stars}\n\n${description}`)
            .setThumbnail(userAvatar)
            .setFooter({ 
                text: `Opinia od ${interaction.user.username}`,
                iconURL: userAvatar
            })
            .setTimestamp();

        // Zapisanie do bazy danych
        try {
            const vouch = new Vouch({
                userId: interaction.user.id,
                username: interaction.user.username,
                avatar: userAvatar,
                title: '',
                rating: rating,
                description: description
            });
            await vouch.save();

            // Wysłanie na kanał
            const vouchChannel = await client.channels.fetch(process.env.VOUCH_DISPLAY_CHANNEL_ID);
            await vouchChannel.send({ embeds: [embed] });

            await interaction.reply({ content: '✅ Opinia została dodana!', flags: 64 });
        } catch (error) {
            console.error('Błąd zapisywania opinii:', error);
            await interaction.reply({ content: '❌ Wystąpił błąd podczas dodawania opinii.', flags: 64 });
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
