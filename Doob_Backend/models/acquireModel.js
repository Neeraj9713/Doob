const { default: mongoose } = require("mongoose");

const acquireSchema = new mongoose.Schema({
    title: String,
    description: String,
    img: String,
})

const acquireModel = new mongoose.model("acquireData", acquireSchema);

module.exports = acquireModel;