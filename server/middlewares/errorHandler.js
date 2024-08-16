import logger from '../utils/logger.js';  // Convert require to import

const errorHandler = (err, req, res, next) => {
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(err.status || 500).json({
        success: false,
        error: err.message || 'Server Error',
    });
};

export default errorHandler;  // Convert module.exports to export default
