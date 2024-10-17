const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

//disk Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/upload')   // setup file folder 
    },
    filename: function (req, file, cb) {
      crypto.randomBytes(12, function(err, name){
        const fn = name.toString("hex")+path.extname(file.originalname); //file name + file extension
        cb(null, fn);
      })
    }
  })


//export upload variable
const upload = multer({ storage: storage })
module.exports = upload;