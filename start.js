// Start both bot and API together
const { spawn } = require('child_process');

console.log('🚀 Starting Bot and API...');

// Start Bot
const bot = spawn('node', ['bot/index.js'], {
    stdio: 'inherit'
});

bot.on('error', (error) => {
    console.error('❌ Bot error:', error);
});

// Start API
const api = spawn('node', ['api/server.js'], {
    stdio: 'inherit'
});

api.on('error', (error) => {
    console.error('❌ API error:', error);
});

// Handle process termination
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down...');
    bot.kill();
    api.kill();
    process.exit();
});
