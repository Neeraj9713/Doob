
const express = require("express");
const acquireData = require("../controller/acquirecontroller");
const upload = require("../config/multerConfig");
const router = express.Router();

router.get("/getAll", acquireData.acquireGetAllData);
router.get("/get/:userId", acquireData.acquireGetData);

router.post("/post",upload.single('profilepic'), acquireData.acquirePostData);
router.post("/postArray",upload.array('profilepics',10), acquireData.acquirePostArrayData);

const multipleImg = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
router.post("/post/multipleImages", multipleImg , acquireData.acquirePostMultipleImages);


router.patch("/update/:userId", acquireData.acquireUpdatedata);
router.delete("/delete/:userId", acquireData.acquireDeleteData);

module.exports = router;