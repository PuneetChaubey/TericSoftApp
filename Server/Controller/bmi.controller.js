const express = require("express");
const bmiController = express.Router();


const Authentication = require("../midleware/authentication.js");
const BmiModel = require("../Models/Bmi.Model.js");



function calculateBmi(h,w) {
    h = h * 0.3048;
    return Number(w) / Number(h ** 2);
}

bmiController.post("/calculatedBmi",Authentication, async (req, res) => {
    const { height, weight,bmi,userId } = req.body;
let bmi_details = calculateBmi(height, weight).toFixed(2);
    // console.log(height, weight, bmi, bmi_details);
    const info = new BmiModel({
        height,
        weight,
        bmi: bmi_details,
        userId,
    })
    await info.save();
    return res.send("BMI Calculated And Saved Successfully");
});

bmiController.get("/getCalculatedBmi", Authentication, async (req, res) => {
    const userId = req.body.userId;
    const bmi_info = await BmiModel.find({ userId });
    if (bmi_info) {
        return res.send(bmi_info)
    }
    else{
    return res.send("No Previous Record")
    }
})



module.exports = bmiController;