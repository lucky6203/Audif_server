const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const connectDB = require("./config/db");


dotenv.config();

const app = express();
connectDB();


app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);

app.use(cors({
  origin: "http://localhost:5173", // Your Vite frontend origin
  credentials: true // if you're using cookies or auth headers
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

