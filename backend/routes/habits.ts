import express from "express";
import prisma from "../const/prisma.js";

const router = express.Router();

router.get("/allForTesting", async (req, res) => {
  const habits = await prisma.habit.findMany();

  res.send(habits);
});

router.get("/", async (req, res) => {
  const { userId } = req;

  const habits = await prisma.habit.findMany({
    where: {
      userId,
    },
  });

  res.send(habits);
});

router.get("/:habitId", async (req, res) => {
  const { userId, params } = req;
  const { habitId } = params;

  const habit = await prisma.habit
    .findUnique({
      where: {
        id: habitId,
        userId,
      },
    })
    .catch((error) => {
      console.log(error);
    });

  res.send({ habit });
});

router.post("/", async (req, res) => {
  const { userId, body } = req;
  const { name, description, daysOfWeek } = body;

  const newHabit = await prisma.habit
    .create({
      data: {
        name,
        description,
        daysOfWeek: {
          create: daysOfWeek.map((day: number) => ({
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
          create: daysOfWeek.map((day: number) => ({
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

export default router;
