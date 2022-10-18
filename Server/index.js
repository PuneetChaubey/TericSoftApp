const express = require("express");
const connection = require("./Config/config.js");
const userController = require("./Controller/user.controller.js");
const bmiController = require("./Controller/bmi.controller.js");

const app = express();

app.use(express.json());
 
app.use("/user", userController);
app.use("/getBmi", bmiController);



app.get("/",(req, res) => {
     res.send("Hello App is Initialized");
    res.json("hello world")

})



app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connection to Db established successfully");
  } catch {
    console.log("some error occured during connecting to DB");
  }
  console.log(`server started at port ${process.env.PORT}`);
});
