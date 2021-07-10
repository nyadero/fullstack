const { verify } = require('jsonwebtoken');
const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");
    if (!accessToken) return res.json({ Error: "User not logged in" });
    try {
        const validToken = verify(accessToken, "importantSecret");
        if (validToken) {
            req.user = validToken;
            return next();
        }
    } catch (error) {
        res.json({ Error: error });
    }
};

module.exports = { validateToken };