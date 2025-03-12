var express = require("express");
var router = express.Router();
var prisma = require("../const/prisma");

/* GET users listing. */
router.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.send({ allUsers });
});

router.post("/", async (req, res) => {
  const { email } = req.body;
  await prisma.user.create({
    data: {
      email,
    },
  });

  res.send({});
});

module.exports = router;
