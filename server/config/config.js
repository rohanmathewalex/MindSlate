// Application configuration
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Export configuration using ES module syntax
export const config = {
    port: process.env.PORT || 5000,
    mongoURI: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    nodeEnv: process.env.NODE_ENV || 'development',
};

/**
 * 
 * Test Locally:
To test in development:

NODE_ENV=development node server.js

To test in production:

NODE_ENV=production node --no-deprecation server.js
 */
