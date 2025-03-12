var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var prisma = require("../const/prisma");

const secretKey = process.env.JWT_SECRET_KEY;

router.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.send({ allUsers });
});

router.post("/", async (req, res) => {
  const { email, password, name } = req.body;
  await prisma.user.create({
    data: {
      email,
      password,
      name,
    },
  });

  res.send({});
});

router.post("/login", async (req, res) => {
  const { email } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  // Write this later
  const passwordMatch = true;

  if (!passwordMatch) {
    return res.status(401).json({ error: "Authentication Failed" });
  }

  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

  res.status(200).json({ token });
});

module.exports = router;
