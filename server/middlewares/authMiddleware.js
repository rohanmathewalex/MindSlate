// Rate limiting to prevent abuse
// server/middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import logger from '../utils/logger.js';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = decoded.user;
        next();
    } catch (err) {
        logger.error('Invalid token');
        res.status(401).json({ message: 'Token is not valid' });
    }
};

export default authMiddleware; 
