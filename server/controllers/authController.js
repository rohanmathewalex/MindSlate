// Authentication related operations
import User from '../models/User.js';  // Use ES module syntax with .js extension
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { config } from '../config/config.js';  // Import config using ES module syntax

// Register user function
export const registerUser = async (req, res) => {
    console.log('Register function called');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('Validation failed:', errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        console.log('Checking if user exists...');
        let user = await User.findOne({ email });

        if (user) {
            console.log('User already exists');
            return res.status(400).json({ msg: 'User already exists', user });
        }

        console.log('Creating new user...');
        user = new User({
            name,
            email,
            password
        });

        console.log('Hashing the password...');
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        console.log('Saving user to database...');
        await user.save();

        console.log('User saved successfully:', user);

        // Response is sent immediately after saving the user
        console.log('User registration successful, preparing token...');
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            config.jwtSecret,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) {
                    console.error('JWT generation failed:', err);
                    return res.status(500).json({ msg: 'Token generation failed' });
                }
                console.log('Sending response with JWT token...');
                return res.status(200).json({ token, user });  // Response with JWT token
            }
        );
    } catch (err) {
        console.error('Server error during registration:', err.message);
        return res.status(500).send('Server error');
    }
};

// Login User Function
export const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials', user });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials', user });
        }

        const payload = {
            user: { id: user.id }
        };

        jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.status(200).json({ msg: "Login Successful", token, user });
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Get all users - Admin-only
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');  // Exclude password field
        res.status(200).json({ msg: "All Users", users });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update user profile
export const updateUserProfile = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Find the user by ID
        let user = await User.findById(req.user.id);

        // Update fields
        if (name) user.name = name;
        if (email) user.email = email;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        await user.save();
        res.json({ msg: 'Profile updated successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
