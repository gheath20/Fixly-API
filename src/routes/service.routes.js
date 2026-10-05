const express = require("express");
const router = express.Router();
const ServiceController = require("../controllers/Service.controllers");
router.get("/", ServiceController.getAll);
router.get("/:id",ServiceController.getOne);
router.post("/add", ServiceController.add);
router.patch("/update/:id", ServiceController.update);
router.delete("/delete/:id", ServiceController.remove);



module.exports = router;