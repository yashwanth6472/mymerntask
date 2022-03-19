require("dotenv").config()

const { rawListeners } = require('../Models/user');
const user = require('../Models/user')
const jwt = require('jsonwebtoken')
const signUp = (req, res) =>{   
    const {name, email, password} = req.body;
    
    user.create({
        name, email, password
    })
    .then((result)=>{
        res.status(200).json({result:result, message:"user signup successfully"})
    })
    .catch((error)=>{
        if (error.message.slice(0, 6) === "E11000"){
            return res.status(400).json({message:"email already exist"});
        }
        res.status(402).json({error:error.message})
    })
}
const signIn = async(req, res) =>{
    try {
        const {email, password} = req.body;

        const checkUser = await user.find({email:email, password:password}).exec();

        if(checkUser){
            const token = jwt.sign({id: checkUser[0]._id}, process.env.SECRET_JWT)
            console.log(checkUser[0]._id);
            const options = {
                httpOnly: true,
                Expires: new Date(
                  new Date().getTime() + process.env.COKKIE_EXPIRE * 86400
                ),
              };
              res.cookie("userToken", token, options);
              res.status(200).json({
                message: "sucessfully loged in",
                token: token,
                userDetails: checkUser,
              });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {signUp, signIn}