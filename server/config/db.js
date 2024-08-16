import mongoose from 'mongoose';
import { config } from './config.js';
import logger from '../utils/logger.js';

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        logger.info('MongoDB Connected');
    } catch (error) {
        logger.error('Error connecting to MongoDB');
        process.exit(1); // Exit process with failure
    }
};

export default connectDB; // Use ES module default export
