// User Data Schema

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    subscription: { type: String, enum: ['free', 'paid', 'premium'], default: 'free' },
    date: { type: Date, default: Date.now }
});

// Export the model using ES module syntax
export default mongoose.model('User', UserSchema);