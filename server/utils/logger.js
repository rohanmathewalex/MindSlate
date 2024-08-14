// Configures and exports Winston logger
// server/utils/logger.js
const winston = require('winston');
require('winston-daily-rotate-file');

// Define the log format
const logFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
);

// Define a daily rotating file transport
const dailyRotateFileTransport = new winston.transports.DailyRotateFile({
    filename: 'logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxFiles: '14d',
});

// Create the Winston logger instance
const logger = winston.createLogger({
    level: 'info',
    format: logFormat,
    transports: [
        new winston.transports.Console(), // Log to console
        dailyRotateFileTransport           // Log to file
    ],
});

module.exports = logger;
