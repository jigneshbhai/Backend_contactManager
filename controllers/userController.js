const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

const registerUser = asyncHandler(async(req,res) => {
    const{ username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400)
        throw new Error("All fields require")
    }

    const userAvailable = await User.findOne({email})
    if(userAvailable) {
        res.status(400);
        throw new Error("user already");
    }

    //hashpass
    const hashPassword = await bcrypt.hash(password,10)
    const user = await User.create({
        username,
        email,
        password: hashPassword
    })
    res.json(user);
})

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current" });
});

module.exports = {
    registerUser,
    loginUser,
    currentUser
}
