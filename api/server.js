const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Połączenie z MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('✅ Połączono z MongoDB');
}).catch(err => {
    console.error('❌ Błąd połączenia z MongoDB:', err);
});

// Modele (takie same jak w bocie)
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

// API Endpoints

// Pobierz wszystkie opinie
app.get('/api/vouches', async (req, res) => {
    try {
        const vouches = await Vouch.find().sort({ createdAt: -1 });
        res.json(vouches);
    } catch (error) {
        res.status(500).json({ error: 'Błąd podczas pobierania opinii' });
    }
});

// Pobierz statystyki
app.get('/api/stats', async (req, res) => {
    try {
        const vouchCount = await Vouch.countDocuments();
        const avgRating = await Vouch.aggregate([
            { $group: { _id: null, avgRating: { $avg: '$rating' } } }
        ]);

        res.json({
            totalVouches: vouchCount,
            averageRating: avgRating[0]?.avgRating || 0
        });
    } catch (error) {
        res.status(500).json({ error: 'Błąd podczas pobierania statystyk' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 API działa na porcie ${PORT}`);
});
