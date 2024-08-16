import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';  // Default import for ES modules
import { upgradeSubscription } from '../controllers/subscriptionController.js';  // Named import for controller

const router = express.Router();

// Upgrade subscription
router.post('/upgrade', authMiddleware, upgradeSubscription);

export default router;  // ES module export