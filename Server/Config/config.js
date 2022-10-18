const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.Authoriziation_link);

module.exports = connection;
