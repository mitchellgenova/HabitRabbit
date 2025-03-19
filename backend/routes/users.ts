import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../const/prisma";

const router = express.Router();
const secretKey = process.env.JWT_SECRET_KEY as string;

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

interface LoginRequestBody {
  email: string;
  password: string;
}

interface User {
  name: string;
  id: string;
  email: string;
}

interface ErrorResponse {
  error: string;
}

type ApiResponse = User | ErrorResponse;

router.post(
  "/login",
  async (
    req: Request<{}, {}, LoginRequestBody>,
    res: Response<ApiResponse>
  ) => {
    const { email, password } = req.body;

    const databaseUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!databaseUser) {
      res.status(401).json({ error: "User not found" });
      return;
    }

    const { password: encryptedPassword, ...user } = databaseUser;

    const passwordMatch = await bcrypt.compare(password, encryptedPassword);

    if (!passwordMatch) {
      res.status(401).json({ error: "Authentication Failed" });
      return;
    }

    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // TODO: Set `true` in production with HTTPS
      maxAge: 60 * 60 * 1000, // 1 hour,
    });

    res.status(200).json(user);
  }
);

export default router;
