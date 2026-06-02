const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));


const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');


const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/taskflow';
mongoose.set('strictQuery', false);
mongoose
  .connect(mongoUri)
  .then(() => {
    if (process.env.MONGO_URI) console.log('MongoDB connecté (Atlas)');
    else console.log('MongoDB connecté (local)');
  })
  .catch((err) => console.error('Erreur de connexion à MongoDB:', err.message));

app.get('/api/ping', (req, res) => {
  res.json({ message: "Serveur TaskFlow operationnel" });
});

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});