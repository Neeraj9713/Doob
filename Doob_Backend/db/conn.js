const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/companyModel").then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log("Error from conn", e);
})
