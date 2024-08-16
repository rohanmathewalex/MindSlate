exports.upgradeSubscription = async (req, res) => {
    const { subscription } = req.body;

    // Ensure subscription type is valid
    if (!['free', 'paid', 'premium'].includes(subscription)) {
        return res.status(400).json({ msg: 'Invalid subscription type' });
    }

    try {
        // Update the user's subscription level
        req.user.subscription = subscription;
        await req.user.save();

        res.json({ msg: `Subscription upgraded to ${subscription}` });
    } catch (err) {
        logger.error(`Error upgrading subscription: ${err.message}`);
        res.status(500).send('Server error');
    }
};
