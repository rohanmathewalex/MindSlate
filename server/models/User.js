// User Data Schema
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    subscription: { type: String, enum:['free', 'paid', 'premium'], default:'free' },
    date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);