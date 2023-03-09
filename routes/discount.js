const Router = require("express")
const path = require("path")
const {dataModel}=require("../models/dataModel")

const discount = Router()



discount.get("/discount", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/cart.html"))
})

discount.get("/all", async (req, res) => {
    try {
        let data = await dataModel.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

discount.post("/create", async (req, res) => {
    try {
        let payload = req.body;
        let data = dataModel(payload);
        await data.save();
        res.send("New Data Added")
    } catch (error) {
        res.send(error)
    }
})


discount.patch("/update/:id", async (req, res) => {
    let ID = req.params.id;
    let payload = req.body;
    try{
        await dataModel.findByIdAndUpdate({ _id: ID }, payload)
        res.send(`data with ${ID} got updated`)
    } catch (error) {
        res.send(error)
    }
})


discount.delete("/delete/:id", async (req, res) => {
    let ID = req.params.id;
    try {
        await PostModel.findByIdandDelete({ _id: ID })
        res.send(`data with ${ID} got deleted`)
    } catch (error) {
        res.send(error)
    }
})


module.exports = { discount }