const companyModel = require("../models/companyModel");

const companyControllerGetAll = async(req, res)=>{
    try{
        const data = await companyModel.findOne();
        return res.status(200).send({success : true,message : "Successfully fetched Company Data",data : data})
    }catch(e){
        res.status(500).json({msg:"error from company model",e})
    }
}

const companyControllerGetKey = async(req,res)=>{
    try{
        const id = req.params.id;
        const data =await companyModel.findOne({id:id});
        res.status(200).json(data);
    }catch(e){
        res.status(500).json({msg:"error from company model",e})
    }
}

const companyControllerPostData = async(req,res)=>{
    try{
        const data = req.body;
        const updateData = await companyModel.create(data);
        res.status(201).json(updateData);
    }catch(e){
        res.status(500).json({msg:"error from company model",e})
    }
}

const companyControllerDelete = async(req,res)=>{
    try{
        const id = req.params.id;
        const deleteData = await companyModel.deleteOne({id:id});
        res.status(201).json(deleteData);
    }catch(e){
        res.status(500).json({msg:"error from company model",e})
    }
}

const companyControllerUpdate = async(req,res)=>{
    try{
        const id = req.params.id;
        const data = req.body;
        const updateData = await companyModel.updateOne({id:id}, {$set: data});
        res.status(200).json(updateData);

    }catch(e){
        res.status(500).json({msg:"error from company model",e})
    }
}

module.exports = {companyControllerGetAll, companyControllerGetKey, companyControllerPostData, companyControllerDelete, companyControllerUpdate};