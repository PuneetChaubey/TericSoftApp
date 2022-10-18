const express = require("express");
const userController = express.Router();
const UserModel = require("../Models/User.Model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


userController.post("/signup", async (req, res) => {
    const { name, email, password, age } = req.body;
    // console.log(name, email)
  bcrypt.hash(password, 10, async function (err, hash) {
    if (err) {
      return res.send(
        "some error encountered while signing up, Please try again"
      );
    }
    const user = new UserModel({
      name,
      email,
      password: hash,
      age,
    });

    await user.save();
    return res.send("signup done successfuly");
  });
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  const hash = user?.password;

  if (user) {
    bcrypt.compare(password, hash, function (err, result) {
      if (result) {
        const token = jwt.sign(
          {
            email: user.email,
            name: user.name,
            age: user.age,
            userId: user._id,
          },
          process.env.JWT_SECRET_TOKEN
        );

        return res.send({ massage: "Loged in successfull", token: token });
      } else {
        return res.send({
          massage: "Invalid credential, Please login again",
        });
      }
    });
  } else {
    return res.send("User Not Found Please register");
  }
});

module.exports = userController;