import express from 'express';
import { registerUser, loginUser, updateUserProfile, getAllUsers } from '../controllers/authController.js';  // Use proper ES module imports
import { check } from 'express-validator';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Ensure validation is properly followed by the controller function
router.post(
    '/register',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password')
            .isLength({ min: 8 })
            .withMessage('Password must be at least 8 characters long')
            .matches(/\d/)
            .withMessage('Password must contain a number')
            .matches(/[A-Z]/)
            .withMessage('Password must contain an uppercase letter')
            .matches(/[a-z]/)
            .withMessage('Password must contain a lowercase letter')
            .matches(/[!@#\$%\^&\*]/)
            .withMessage('Password must contain a special character'),
    ],
    registerUser  // Callback function goes here
);

// Similarly for the login route
router.post(
    '/login',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    loginUser  // Callback function goes here
);

router.put('/profile', authMiddleware, updateUserProfile);
router.get('/users', authMiddleware, getAllUsers);

export default router; 
