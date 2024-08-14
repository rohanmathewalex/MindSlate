// server/server.js
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const authRoutes = require('./routes/authRoutes');
const logger = require('./utils/logger');
const config = require('./config/config');

const app = express();

// Connect to the database
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = config.port;
app.listen(PORT, () => {
    logger.info(`Server running in ${config.nodeEnv} mode on port ${PORT}`);
});
