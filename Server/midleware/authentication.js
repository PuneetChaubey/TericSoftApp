const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.Model");

const Authentication = (req, res, next) => {
  let token = req.headers?.authentication.split(" ")[1];

  jwt.verify(
    token,
    process.env.JWT_SECRET_TOKEN,
    async function (err, decoded) {
      if (err) {
        return res.send("Please Login Again");
      }
      const user = await UserModel.findOne({ email: decoded.email });

      req.body.userId = decoded.userId;
      next();
    }
  );
};

module.exports = Authentication;
