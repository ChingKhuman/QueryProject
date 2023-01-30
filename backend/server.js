const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
// const db = require("./db");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const PORT = process.env.PORT || 80;
const router = require("./routers");

const url =
  "mongodb+srv://ChingKhuman:ChingKhuman@cluster0.ryrxi40.mongodb.net/?retryWrites=true&w=majority";
// db connection

async function connect() {
  try {
    await mongoose.connect(url);
    console.log("Connected To Mongo DB");
  } catch (error) {
    console.error(error);
  }
}
connect();

//middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.json());

//headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// api

app.use("/api", router);

//static resources

app.use("/upload", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  } catch (e) {
    res.send("OOPs! error occurred");
  }
});

//cors
app.use(cors());

//server listen
app.listen(PORT, () => {
  console.log(`Stack clone is running on PORT No- ${PORT}`);
});
