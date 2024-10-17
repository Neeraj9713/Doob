const { default: mongoose } = require("mongoose");

const acquireSchema = new mongoose.Schema({
    title: String,
    description: String,
    profilepic: String
})

const acquireModel = new mongoose.model("acquireData", acquireSchema);


//Array data 

const acquireSchemaArray = new mongoose.Schema({
    title: String,
    description: String,
    profilepics: {
        type:[String]
    }
})

const acquireModelArray = new mongoose.model("acquireDataArray", acquireSchemaArray);




//Multiple images upload from different different fields
const multipleImagesPost = new  mongoose.Schema({
    title: String,
    avatar: String,
    gallery: [String]
})

const multipleImagesModel = new  mongoose.model("multipleImagesModel",multipleImagesPost );

module.exports = {acquireModel, acquireModelArray, multipleImagesModel};