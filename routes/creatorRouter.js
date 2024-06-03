const express = require("express")
const creatorRouter = express.Router()
const morgan = require("morgan")
// Capitalize all Mongoose Model variables to indicate that they are Mongoose Models
const Creator = require('../models/Data-Models/Creator.js')

creatorRouter.use(express.json())
creatorRouter.use(morgan('dev'))

    // Mongoose-related Requests \\
// creatorRouter GET requests 

// GET All Creator Request
creatorRouter.get('/', async (req, res, next) => {
    try {
        const creators = await Creator.find()
        res.status(200).send(creators)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})
// Individual Creator GET request
creatorRouter.get('/:creatorId', async (req, res, next) => {
    try {
        const creatorId = req.params.creatorId
        const foundCreator = await Creator.find(creator => creator._id === creatorId)
        res.status(200).send(foundCreator)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// creatorRouter POST requests (For making the initial database)
creatorRouter.post('/', async (req, res, next) => {
    try {
        const newCreator = new Creator(req.body)
        savedCreatorDetails = await newCreator.save()
        res.status(201).send(savedCreatorDetails)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})



module.exports = creatorRouter