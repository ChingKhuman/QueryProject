const express = require("express");
const router = express.Router();
const questionRouter = require("./Question");

const answerRouter = require("./Answers");
// const commentRouter = require('./')

router.get("/", (req, res) => {
  res.send("Welcome to stackoverflow");
});

router.use("/question", questionRouter);
router.use("/answer", answerRouter);

module.exports = router;
