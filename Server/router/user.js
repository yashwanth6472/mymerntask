const express = require('express')
const userRouter = express.Router()
const userauth = require("../Middleware/user")
const {signUp, signIn} = require('../Controller/user')
userRouter.post("/signUp", signUp)
userRouter.post("/signIn", signIn)

module.exports = userRouter