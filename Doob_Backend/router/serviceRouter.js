const express = require("express");
const service = require("../controller/serviceController");
const router = express.Router();

router.get("/getall", service.serviceGetAllData);
router.get("/get/:userId", service.serviceData);
router.post("/post", service.servicePost);
router.delete("/delete/:userId", service.serviceDelete);
router.patch("/update/:userId", service.serviceUpdate);
 
module.exports = router;