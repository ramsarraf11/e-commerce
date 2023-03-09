const Router = require("express")
const path = require("path")

const offer = Router()

offer.get("/offer", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/offer.html"))
})

module.exports = { offer }