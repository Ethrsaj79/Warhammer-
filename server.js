const express = require("express")
const morgan = require("morgan")
const mongoose = require('mongoose')
require('dotenv').config()
const app = express();
const {expressjwt} = require('express-jwt')
const path = require("path")

process.env.SQWEQWET

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "dist")))

app.get("/", (req, res) => {
    res.send(`Welcome to the server`)
})


const connectedDB =  async () => {
    try {
      await mongoose.connect(`mongodb+srv://storytellingsag3:taNbU6jYr5IkycE1@cluster0.nygw1e7.mongodb.net/factions`)
      console.log(`Connected to Database`)
    } catch (err) {
      console.log(err)
    }
  }
  
  connectedDB()
  
  // Routes
  app.use('/api/auth', require('./routes/authRouter.js'))
  app.use('/api/main', expressjwt({secret: `${process.env.SQWEQWET}`, algorithms: ['HS256']}))
  app.use('/api/main/user-comments', require(`./routes/commentRouter.js`))
  app.use("/api/factions", require("./routes/factionRouter.js"))
  app.use("/api/creators", require("./routes/creatorRouter.js"))


// Error Handle/Console Alert
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})




app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
app.listen(9000, () => {
    console.log("The server is running on Port 9000!!")
})