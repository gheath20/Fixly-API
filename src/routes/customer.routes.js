const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer.controllers");
router.get("/", customerController.getAll);
router.get("/:id",customerController.getOne);
router.post("/add", customerController.add);
router.patch("/update/:id", customerController.update);
router.delete("/delete/:id", customerController.remove);



module.exports = router;