const {acquireModel, acquireModelArray, multipleImagesModel} = require("../models/acquireModel");


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

const acquirePostData = async (req, res) => {
    try {
      const { title, description } = req.body;
      
      // Multer saves the file and provides access to req.file
      const profilepic = req.file ? req.file : null;
  
      console.log(req.file);
      
      // Create a new record
      const newAcquireData = new acquireModel({
        title: title,
        description: description,
        profilepic: profilepic.path
      });


  
      // Save to the database
      await newAcquireData.save();
      
      res.status(201).json({ message: "Data posted successfully", data: newAcquireData });
    } catch (error) {
      res.status(500).json({ message: "Error in posting data", error });
    }
  };

//array post data
  const acquirePostArrayData = async(req, res)=>{
    try{
        const {title, description} = req.body;
        const profilepics = req.files ? req.files : null;
        console.log(req.files);

        const profilepicPaths = profilepics.map(file => file.path);

        const ArrayProfilepic = new acquireModelArray({
            title: title,
            description: description,
            profilepics: profilepicPaths
        })
        await ArrayProfilepic.save();
        res.status(201).json({
            msg: "successful submitted",
            data: ArrayProfilepic
        })
        
    }catch(e){
        res.status(500).json({message: "Error in posting ArrayData", e})
    }
  }

//acquirePostMultipleImages

const acquirePostMultipleImages = async(req, res)=>{
    try{
        const {title} = req.body;

        const avtarfile = req.files["avatar"] ? req.files['avatar'] : null;
        const galleryfile = req.files["gallery"] ? req.files["gallery"] : [];

        const avatarPath = avtarfile ? avtarfile.path : null;
        const galleryPath = galleryfile.map(file=>file.path); 

        const updatedData = new multipleImagesModel({
            title: title,
            avatar : avatarPath ,
            gallery: galleryPath
        });

        await updatedData.save();
        res.status(201).json({
            message:"images uploaded successfully",
            data:updatedData
        })
        
    }catch(e){
        console.log("error from acquirePostMultipleImages ", e);
        
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
module.exports = {acquireGetAllData, acquireGetData, acquirePostData, acquireDeleteData, acquireUpdatedata, acquirePostArrayData,acquirePostMultipleImages}