const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:[true,"Enter username"]
    },
    email:{
        type:String,
        require:[true, "Enter email"],
        unique:[true,"already taken"]
    },
    password:{
        type:String,
        require:[true,"Enter password"]
    }
}, {timestamps: true})

module.exports = mongoose.model("User",userSchema)