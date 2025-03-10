var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("Habits list endpoint");
});

router.get("/:habitId", (req, res) => {
  res.send(`Habits detail endpoint at id: ${req.params.habitId}`);
});

module.exports = router;
