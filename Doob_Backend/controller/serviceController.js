const serviceModel = require("../models/serviceModel");

const serviceGetAllData = async(req, res)=>{
    try{
        const data = await serviceModel.find();
        res.status(200).json(data); 
    }catch(e){
        res.status(500).json("error from service data controller",e);
    }
}

const serviceData = async(req, res)=>{
    try{
        const userId = req.params.userId;
        const data = await serviceModel.findOne({_id: userId});
        res.status(200).json(data);
    }catch(e){
        res.status(500).json("error from service single data controller", e);
    }
}

const servicePost = async(req, res)=>{
    try{
        const data = req.body; 
        const updateData = await serviceModel.create(data);
        res.status(200).json(updateData);
    }catch(e){
        res.status(500).json("error from service single data controller", e);
    }
}

const serviceDelete = async(req, res)=>{
    try{
        const userId = req.params.userId; 
        const updateData = await serviceModel.deleteOne({_id: userId});
        res.status(200).json("Delete Successfull");
    }catch(e){
        res.status(500).json("error from service single data controller", e);
    }
}

const serviceUpdate = async(req, res)=>{
    try{
        const userId = req.params.userId;
        const data = req.body; 
        const updateData = await serviceModel.updateOne({_id: userId}, {$set: data });
        res.status(200).json(updateData);
    }catch(e){
        res.status(500).json("error from service single data controller", e);
    }
}


module.exports = {serviceGetAllData, serviceData ,servicePost, serviceDelete, serviceUpdate};