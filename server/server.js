// Suppress warnings in production
if (process.env.NODE_ENV === 'development') {
    process.env.NODE_NO_WARNINGS = '1';
}

import express from 'express';
import connectDB from './config/db.js';  // Default import
import errorHandler from './middlewares/errorHandler.js';  // Use import for errorHandler
import authRoutes from './routes/authRoutes.js';  // Use import for authRoutes
import logger from './utils/logger.js';
import { config } from './config/config.js';  // Named import for config

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

// Export the app for testing
export { app };
