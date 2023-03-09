const Router = require("express")
const path = require("path")

const discount = Router()



discount.get("/discount", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/cart.html"))
})


module.exports = { discount }