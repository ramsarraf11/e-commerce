const express = require("express")
const path = require("path")
const { discount } = require("./routes/discount")
const { offer } = require("./routes/offer")
require("dotenv").config()


const app = express()
app.use(express.json())


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.use("/", discount)
app.use("/", offer)


app.listen((process.env.port), () => {
    console.log("Server is Connected")
})