const mongoose = require('mongoose')
const Schema = mongoose.Schema

// User Blueprint

const userSchema = new Schema({
    memberSince: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    username: {
        type: String,
        required: true
    },
    userpassword: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", userSchema)