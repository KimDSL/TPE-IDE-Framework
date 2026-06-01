const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion MongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connecté'))
    .catch((err) => console.error('Erreur de connexion à MongoDB:', err));

// Route de test
app.get('/api/ping', (req, res) => {
  res.json({ message: "Serveur TaskFlow operationnel" });
});

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});