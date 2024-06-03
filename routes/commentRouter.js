const express = require("express")
const commentRouter = express.Router()
const morgan = require('morgan')
const Comment = require('../models/Comment.js')

commentRouter.use(express.json())
commentRouter.use(morgan('dev'))

commentRouter.get(`/comment-list`, async (req, res, next) => {
    try {
        const getAllComments = await Comment.find()
        res.status(200).send(getAllComments)
        console.log(getAllComments)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

        // Faction Comment Section \\
    // Get Faction-Specific Comments
commentRouter.get(`/:factionId/comments-section`, async (res, req, next) => {
    try {
        // faction
        const factionId = req.params.factionId
        // req.body.faction.ObjectId = factionId
        const factionComments = await Comment.find(faction => faction._id === factionId)
        res.status(200).send(factionComments)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})
// Get all Faction Comments/Suggestions
commentRouter.get('/all-faction-comments', async (req, res, next) => {
    try {
        // factions
        const getAllComments = await Comment.find(/* factions */)
        res.status(200).send(getAllComments)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Creator Comment Section \\
// Get Creator List Comments/Suggestions
commentRouter.get('/all-creator-comments', async (req, res, next) => {
    try {
        // creators
        const getAllComments = await Comments.find(/* creators */)
        res.status(200).send(getAllComments)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})
// Get Creator-Specific Comments
commentRouter.get('/:creatorId/comments-section', async (req, res, next) => {
    try {
        // const creators
        const creatorId = req.params.creatorId
        // req.body.creator.ObjectId = creatorId
        const getCreatorPageComments = await Comment.find(creator => creator._id === creatorId)
        res.status(200).send(getCreatorPageComments)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

            // POST Requests \\
        // Making a Comment
commentRouter.post('/new', async (req, res, next) => {
    try {
        req.body.user = req.auth._id
        const newComment = new Comment(req.body)
        const savedComment = await newComment.save()
        res.status(201).send(savedComment)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})
        // Making general faction comment post requests
commentRouter.post(`/`, async () => {
    try {
        
    } catch (err) {
        res.status(500)
        return next(err)
    }
})
        // Making specific faction comment post requests
commentRouter.post(`/`, async () => {
    try {
        
    } catch (err) {
        res.status(500)
        return next(err)
    }
})
        // Making general creator comment post requests
commentRouter.post(`/`, async () => {
    try {
        
    } catch (err) {
        res.status(500)
        return next(err)
    }
})
        // Making specific creator comment post requests
commentRouter.post(`/`, async () => {
    try {
        
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = commentRouter