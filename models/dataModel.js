const mongoose = require("mongoose")


const dataSchema = mongoose.Schema({
    id:Number,
    Name:String,
    price:Number,
    category:String,
    available:Boolean
})

const DataModel = mongoose.model("data",dataSchema)

module.exports={DataModel}

