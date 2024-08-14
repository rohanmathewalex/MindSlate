// Handles application errors
// server/middlewares/errorHandler.js
const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(err.status || 500).json({
        success: false,
        error: err.message || 'Server Error',
    });
};

module.exports = errorHandler;
