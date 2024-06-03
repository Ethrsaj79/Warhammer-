const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Faction BluePrint

const factionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Faction", factionSchema)