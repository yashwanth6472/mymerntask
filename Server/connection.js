const mongoose = require('mongoose')

const connection = (url)  =>{
    mongoose.connect(url, {useNewUrlParser: true})
    .then((result)=>console.log("connected to database successfully"))
    .catch((error)=>console.log(error.message))
}   


module.exports = connection