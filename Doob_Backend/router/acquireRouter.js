
const express = require("express");
const acquireData = require("../controller/acquirecontroller");
const router = express.Router();

router.get("/getAll", acquireData.acquireGetAllData);
router.get("/get/:userId", acquireData.acquireGetData);
router.post("/post", acquireData.acquirePostData);
router.patch("/update/:userId", acquireData.acquireUpdatedata);
router.delete("/delete/:userId", acquireData.acquireDeleteData);

module.exports = router;