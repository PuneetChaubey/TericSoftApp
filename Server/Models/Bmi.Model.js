const mongoose = require("mongoose");

const BmiSchema = new mongoose.Schema({
  height: { type: String, isRequired: true },
    weight: { type: String, isRequired: true },
  bmi:String,
  userId: String
});

const BmiModel = mongoose.model("bmi", BmiSchema)

module.exports = BmiModel;