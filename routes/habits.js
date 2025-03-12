var express = require("express");
var router = express.Router();
var prisma = require("../const/prisma");

router.get("/allForTesting", async (req, res) => {
  const habits = await prisma.habit.findMany();
  res.send({ habits });
});

router.get("/", async (req, res) => {
  const habits = await prisma.habit.findMany();
  res.send({ habits });
});

router.get("/:habitId", async (req, res) => {
  const { habitId } = req.params;

  const habit = await prisma.habit
    .findUnique({
      where: {
        id: habitId,
      },
    })
    .catch((error) => {
      console.log(error);
    });

  res.send({ habit });
});

router.post("/", async (req, res) => {
  const { name, description, daysOfWeek, userId } = req.body;

  const newHabit = await prisma.habit
    .create({
      data: {
        name,
        description,
        daysOfWeek: {
          create: daysOfWeek.map((day) => ({
            day,
          })),
        },
        userId,
      },
    })
    .catch((error) => {
      console.log("Error", error);
    });

  res.send({ newHabit });
});

router.patch("/:habitId", async (req, res) => {
  const { habitId } = req.params;
  const { name, description, daysOfWeek } = req.body;

  const updatedHabit = await prisma.habit
    .update({
      where: {
        id: habitId,
      },
      data: {
        name,
        description,
        daysOfWeek: {
          create: daysOfWeek.map((day) => ({
            day,
          })),
        },
      },
    })
    .catch((error) => {
      console.log(error);
    });

  res.send({ updatedHabit });
});

router.delete("/:habitId", async (req, res) => {
  const { habitId } = req.params;

  await prisma.habit
    .delete({
      where: {
        id: habitId,
      },
    })
    .catch((error) => {
      console.log(error);
    });

  res.send({ habitId });
});

module.exports = router;
