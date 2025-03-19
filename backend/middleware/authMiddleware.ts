import { NextFunction, Request, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY as string;

interface DecodedToken {
  userId: string;
}

const verifyToken: RequestHandler = (req, res, next) => {
  const token = req.cookies.token;
  console.log(req.cookies);

  if (!token) {
    res.status(401).json({ error: "Access Denied" });
    return;
  }

  try {
    const decoded = jwt.verify(token, secretKey) as DecodedToken;
    req.userId = decoded.userId;

    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export default verifyToken;
