const winston = require('winston');

const logger = winston.createLogger({
    level: process.env.NODE_ENV === 'production' ? 'error' : 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        process.env.NODE_ENV === 'production' 
            ? new winston.transports.File({ filename: 'logs/production.log' }) 
            : null
    ].filter(Boolean),
});

module.exports = logger;
