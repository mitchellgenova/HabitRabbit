import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../const/prisma.js";

const router = express.Router();
const secretKey = process.env.JWT_SECRET_KEY;

router.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.send({ allUsers });
});

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  res.status(201).json({ message: "User registered successfully " });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: "Authentication Failed" });
  }

  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // TODO: Set `true` in production with HTTPS
    sameSite: "lax",
    maxAge: 60 * 60 * 1000, // 1 hour,
  });

  const { password: unsentPassword, ...restOfUser } = user;

  res.status(200).json({ ...restOfUser });
});

export default router;
