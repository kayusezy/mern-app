// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Define a simple route
app.get('/', (req, res) => {
    res.send("Hello from the backend!");
});
app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find(); // Fetch all items from the database
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

const userRoutes = require('./routes/userRoutes');

// Add the user routes
app.use('/api/users', userRoutes);
