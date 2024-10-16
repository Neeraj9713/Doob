const acquireModel = require("../models/acquireModel");

const acquireGetAllData = async(req, res)=>{
    try{
        const data = await acquireModel.find();
        res.status(200).json(data);
    }catch(e){
        res.status(500).json("error from Acquire controller",e)
    }
}

const acquireGetData = async(req, res)=>{
    try{
        const userId = req.params.userId;
        const data = await acquireModel.findOne({_id: userId});
        res.status(200).json(data);
    }catch(e){
        res.status(500).json("error from Acquire controller",e)
    }
}

const acquirePostData = async(req, res)=>{
    try{
        const data = req.body;
        const updateData = await acquireModel.create(data);
        res.status(200).json(updateData);
    }catch(e){
        res.status(500).json("error from Acquire controller",e)
    }
}

const acquireDeleteData = async(req, res)=>{
    try{
        const userId = req.params.userId;
        const updateData = await acquireModel.deleteOne({_id:userId});
        res.status(200).json(updateData);
    }catch(e){
        res.status(500).json("error from Acquire controller",e)
    }
}

const acquireUpdatedata = async(req, res)=>{
    try{
        const userId = req.params.userId;
        const data = req.body;
        const updateData = await acquireModel.deleteOne({_id:userId}, {$set: data});
        res.status(200).json(updateData);
    }catch(e){
        res.status(500).json("error from Acquire controller",e)
    }
}
module.exports = {acquireGetAllData, acquireGetData, acquirePostData, acquireDeleteData, acquireUpdatedata}