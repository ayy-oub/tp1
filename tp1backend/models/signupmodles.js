const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    userName:{
        type: String,
        required:true,
        unique: 1
    },
    email:{
        type: String,
        required:true,
        unique:1
    },
    password:{
        type: String,
        required:true,
        minlength:6
    },
    confirmPassword:{
        type: String,
        required:true,
        minlength:6
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('signuptable', signUpTemplate)