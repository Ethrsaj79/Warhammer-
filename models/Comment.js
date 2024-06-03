const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Comment Blueprint

const commentSchema = new Schema({
    madeOn: {
        type: Date,
        default: Date.now
    },
    commentType: {
        type: String,
        enum: ['Faction', 'Creator', 'General'],
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        
    },
})

module.exports = mongoose.model("Comment", commentSchema)