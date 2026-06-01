const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Route de test
app.get('/api/ping', (req, res) => {
  res.json({ message: "Serveur TaskFlow operationnel" });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});