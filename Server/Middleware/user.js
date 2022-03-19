require("dotenv").config();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const user = require('../Models/user')
const userauth = (req, res, next) => {
  const userToken = req.headers.cookie;
  const filterToken = userToken && userToken.split("=")[1];
  if (!filterToken) {
    return res.status(400).json({
      error: "You must be Logged IN",
    });
  }
  jwt.verify(filterToken, process.env.SECRET_JWT, async (error, userResult) => {
    if (error) throw error;

    req.user = await user.findById(userResult.id).exec();
    next();
  });
};
module.exports = userauth;
