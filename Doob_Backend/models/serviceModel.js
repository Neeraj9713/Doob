const { default: mongoose } = require("mongoose");

const serviceSchema = new mongoose.Schema({
    num: Number,
    color: String,
    title: String,
    description: String 
})

const serviceModel = new mongoose.model("serviceData", serviceSchema);

module.exports = serviceModel;