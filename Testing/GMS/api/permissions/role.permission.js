exports.userPermissionLevelRequired = (requiredPermissionLevel) => (req, res, next) => {
    const userPermissionLevel = parseInt(req.user.user_type);

    const requiredLevel = parseInt(requiredPermissionLevel);
    console.log('Bit :', userPermissionLevel, requiredLevel);
    // const user_id = req.user.user_id;
    if (userPermissionLevel && requiredLevel) {
        return next();
    }
    return res.status(403).send();
};
