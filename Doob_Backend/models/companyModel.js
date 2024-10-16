const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    BannerText:{
        type: String,
        require: true,
    },
    BannerKeyWords:{
        type: Array
    },
    BannerDescription:{
        type: String,
    },
    ServiceTopHighlight: String,
    ServiceHeading: String,
    ServiceDescription: String,
    AquireTopHighLight: String,
    AquireHeading: String,
    AquireDescription: String,
    AdvanceTopHighlight: String,
    AdvanceTitle: String,
    AdvanceDescription: String,
    AwesomeTop: String,
    AwesomeTitle: String,
    ReadyTitile: String,
    ReadyChoice: String,
})

const companyData = new mongoose.model("companyModel",companySchema);

module.exports = companyData;