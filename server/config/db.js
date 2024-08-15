const mongoose = require('mongoose');
const config = require('./config');
const logger = require('../utils/logger');

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        // Log a generic success message without revealing the connection string
        logger.info('MongoDB Connected');
    } catch (error) {
        // Log an error message without revealing the connection string
        logger.error('Error connecting to MongoDB');
        process.exit(1);
    }
};

module.exports = connectDB;
