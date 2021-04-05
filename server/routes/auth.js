const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrpyt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const requireLogin = require("../middleware/requireLogin")

router.get("/protected", requireLogin, (req, res) => {
  res.send("Hello user!!!");
});

router.post("/signup", (req, res) => {
  const { name, email, password ,role} = req.body;
  if (!email || !name || !password || !role) {
    return res
      .status(422)
      .json({ error: "Please fill all the required fields!!" });
  }
  User.findOne({ email: email })
    .then((exists) => {
      if (exists) {
        return res.status(422).json({ error: "User already exists!!" });
      }
      bcrpyt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          name,
          email,
          password: hashedpassword,
          role
        });
        user
          .save()
          .then((user) => {
            res.json({ message: "Saved Successfully!!" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(422).json({ error: "Please provide an email!!" });
  }
  if (!password) {
    return res.status(422).json({ error: "Please provide the password!!" });
  }
  User.findOne({ email: email })
    .then((exists) => {
      if (!exists) {
        return res.status(422).json({ error: "Invalid Credentials!!" });
      }
      bcrpyt.compare(password, exists.password).then((check) => {
        if (check) {
          const token = jwt.sign({ _id: exists._id }, JWT_SECRET);
          const { _id, name, email, role } = exists;
          res.json({ token, user: { _id, name, email ,role} });
          console.log("Hi",name)
        } else {
          return res.status(422).json({ error: "Invalid Credentials!!" });
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
