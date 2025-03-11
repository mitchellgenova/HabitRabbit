var express = require("express");
var router = express.Router();

/*
  [{
    id: string,
    name: string,
    description: string,
    daysOfWeek: number[],
    completions: number,
    completionPercentage: number,
    habitType: enum,
  }]
*/

router.get("/", (req, res) => {
  res.send("Habits list endpoint");
});

/*
  {
    id: string,
    name: string,
    description: string,
    daysOfWeek: number[],
    completions: number,
    completionPercentage: number,
    habitType: enum,
  }
*/

router.get("/:habitId", (req, res) => {
  res.send(`Habits detail endpoint at id: ${req.params.habitId}`);
});

/*
  {
    name: string,
    description: string,
    daysOfWeek: number[],
    habitType: enum,
  }
*/

router.post("/", (req, res) => {
  res.send("Habit creation endpoint");
});

/*
  {
    name: string,
    description: string,
    daysOfWeek: number[],
    habitType: enum,
  }
*/

router.patch("/:habitId", (req, res) => {
  res.send(`Habits update endpoint with id: ${req.params.habitId}`);
});

// No payload for deletion

router.delete("/:habitId", (req, res) => {
  res.send(`Habits delete endpoint with id: ${req.params.habitId}`);
});

module.exports = router;
