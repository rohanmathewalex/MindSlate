module.exports = (requiredSubscription) => {
    return(req,res,next) => {
        const userSubscription = req.user.subscription;

        //if the user's subscription level is less than the required level, deny access
        if(requiredSubscription === 'paid' && (userSubscription === 'free')) {
            return res.status(403).json({msg: 'Access denied. Please upgrade to a paid plan'})
        }
        next();
    };
}