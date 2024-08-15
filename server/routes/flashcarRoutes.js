// Routes for flashcard management
const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const subscriptionMiddleware = require('../middlewares/subscriptionMiddleware');
const { generateFlashcards } = require('../controllers/flashcardController');

const router = express.Router();

// Flashcard generation - restricted to paid and premium users
router.post('/generate-flashcards', authMiddleware, subscriptionMiddleware('paid'), generateFlashcards);

module.exports = router;
