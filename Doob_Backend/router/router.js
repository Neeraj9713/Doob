const express = require("express");
const companyController = require( "../controller/companyController");

const router = express.Router();

router.route("/getAll").get(companyController.companyControllerGetAll);
router.route("/get/:id").get(companyController.companyControllerGetKey);
router.route("/post").post(companyController.companyControllerPostData);
router.route("/delete/:id").delete(companyController.companyControllerDelete);
router.route("/update/:id").patch(companyController.companyControllerUpdate);

module.exports =  router;