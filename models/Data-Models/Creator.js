const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creator BluePrint

const creatorSchema = new Schema({
    name : {
        type: String,
        required: true,
        unique: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    primaryLink : {
        type: String,
        required: true
    },
    summary : {
        type: String,
        required: true
    } 
})

module.exports = mongoose.model("Creator", creatorSchema)