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

module.exports = router;
