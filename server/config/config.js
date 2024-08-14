// Application configuration
const dotenv = require('dotenv');

//Load environment variables from .env file
dotenv.config();


module.exports = {
    port: process.env.PORT || 5000,
    mongoURI: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    nodeEnv: process.env.NODE_ENV || 'development',
};
