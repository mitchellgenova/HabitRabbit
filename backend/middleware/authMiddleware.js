const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET_KEY;

const verifyToken = (req, res, next) => {
  const bearerToken = req.header("authorization");

  if (!bearerToken) {
    return res.status(401).json({ error: "Access Denied" });
  }

  try {
    const token = bearerToken.split(" ")[1];
    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = verifyToken;
