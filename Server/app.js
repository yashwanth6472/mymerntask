require("dotenv").config();
const express = require('express')
const app = express()
const cors = require('cors')
 app.use(
   cors({
     origin: true,
     credentials: true,
   })
 );
const PORT = process.env.PORT
const url = process.env.DATABASE_URL
const connection = require('./connection')
const userRouter = require("./router/user")
app.use(express.json())

connection(url)
app.use("/user", userRouter)

app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`)
})
