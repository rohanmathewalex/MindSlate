const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { upgradeSubscription } = require('../controllers/subscriptionController');

const router = express.Router();

// Upgrade subscription
router.post('/upgrade', authMiddleware, upgradeSubscription);

module.exports = router;
