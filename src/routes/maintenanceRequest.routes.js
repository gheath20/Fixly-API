const express = require("express");
const router = express.Router();
const requestController = require("../controllers/maintenanceRequest.controllers");
router.get("/", requestController.getAll);
router.get("/id",requestController.getOne);
router.post("/add", requestController.add);
router.patch("/update", requestController.update);
router.delete("/delete", requestController.remove);




module.exports = router;