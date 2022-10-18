const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
  name: { type: String, isRequired: true },
  email: { type: String, isRequired: true },
  password: { type: String, isRequired: true },
  age: { type: String, isRequired: true },
});

const UserModel = mongoose.model("user-signup-cred", UserSchema);


module.exports = UserModel;