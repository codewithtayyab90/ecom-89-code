const authModel = require("../models/Auths")
const bcrypt = require("bcryptjs")

const register = async (req, res) => {
    const {username, email, password} = req.body
    const existingUser = await authModel.findOne({email})
    if(existingUser){
        return res.status(400).json({
            message: "User already exists"
        })
}
const hashedPassword = await bcrypt.hash(password, 10)
const result = await authModel.create({
    username:username,
    email:email,
    password:hashedPassword
})
res.status(201).json({
    message: "User created successfully",result
})
}
const login = async (req,res) => {
    const {email, password} = req.body;
    const existingUser = await authModel.findOne({email})
    if(!existingUser){
     return   res.status(404).json({
            Message:`Email Not Found, Please Register First`
        })
    }
    const matchedPassword = await bcrypt.compare(password, existingUser.password)
    if(!matchedPassword){
      return res.status(400).json({
            Message:`Password is Incorrect`
        })
    }
    res.status(200).json({
        Message:`Login Successful`,
        user: existingUser
    })
}

module.exports = {register, login}