const express = require("express")
const factionRouter = express.Router()
const morgan = require("morgan")
// Capitalize all Mongoose Model variables to indicate that they are Mongoose Models
const Faction = require('../models/Data-Models/Faction.js')

factionRouter.use(express.json())
factionRouter.use(morgan('dev'))

    // Mongoose-related Requests \\
// factionRouter GET requests 

// GET All Faction Request
factionRouter.get('/', async (req, res, next) => {
    try {
        const factionList = await Faction.find()
        res.status(200).send(factionList)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})
// Individual faction GET request
factionRouter.get('/:factionId', async (req, res, next) => {
    try {
        const factionId = req.params.factionId
        const foundFaction = await Faction.find(faction => faction._id === factionId)
        res.status(200).send(foundFaction)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// factionRouter POST requests (For making the initial database)
factionRouter.post('/', async (req, res, next) => {
    try {
        const newFaction = new Faction(req.body)
        const savedFaction = await newFaction.save()
        res.status(200).send(savedFaction)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})



module.exports = factionRouter