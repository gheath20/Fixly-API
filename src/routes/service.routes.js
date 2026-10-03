const express = require("express");
const router = express.Router();
const ServiceController = require("../controllers/Service.controllers");
router.get("/", ServiceController.getAll);
router.get("/id",ServiceController.getOne);
router.post("/add", ServiceController.add);
router.patch("/update", ServiceController.update);
router.delete("/delete", ServiceController.remove);



module.exports = router;