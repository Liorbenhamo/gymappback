const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/Users");
const Day = require("./models/Day");
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://liorbenhamo:0502730029@cluster0.hzf3enx.mongodb.net/gymrats?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB is Connected"))
  .catch((error) => {
    console.log("Connection Failed");
    console.log(error);
  });

app.get("/users", async (req, res) => {
  try {
    let data = await User.find();
    res.send(data);
  } catch (err) {
    res.status(400).json(err.message);
  }
});
app.get("/days", async (req, res) => {
  try {
    let data = await Day.find();
    res.send(data);
  } catch (err) {
    res.status(400).json(err.message);
  }
});
app.post("/gymusers", async (req, res) => {
  try {
    console.log(req.body);
    const { email, username, password, firstname, lastname } = req.body;
    const newUser = new User({
      username,
      password,
      firstname,
      email,
      lastname,
    });
    const userAdded = await newUser.save();
    res.status(200).json(userAdded);
  } catch (err) {
    res.status(400).json(err.message);
  }
});
app.post("/pilates", async (req, res) => {
  try {
    console.log(req.body);
    const { date, day, month, year, users } = req.body;
    console.log(date);
    console.log("grbgr");
    const newDate = new Day({
      date,
      day,
      month,
      year,
      users,
    });
    console.log("hii");
    const datechange = await newDate.save();
    res.status(200).json(datechange);
  } catch (err) {
    res.status(400).json(err.message);
  }
});
app.put("/putusers", async (req, res) => {
  try {
    console.log(req.body);
    let doc = await User.findByIdAndUpdate(req.body._id, req.body);
    res.status(200).json(doc);
  } catch (err) {
    console.log("atlist");
    res.status(400).json(err.message);
  }
});
app.put("/putdays", async (req, res) => {
  try {
    console.log(req.body);
    let doc = await Day.findByIdAndUpdate(req.body._id, req.body);
    res.status(200).json(doc);
  } catch (err) {
    console.log("atlist");
    res.status(400).json(err.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
