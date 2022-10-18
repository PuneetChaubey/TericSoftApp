const express = require("express");
const app = express();
const UserModel = 

 app.use(express.json());


app.get("/",(req, res) => {
     res.send("Hello App is Initialized");
    res.json("hello world")

})



app.listen(5000,() => {
    console.log("app  started on port 5000");
})
