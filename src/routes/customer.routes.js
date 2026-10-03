const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer.controllers");
router.get("/", customerController.getAll);
router.get("/id",customerController.getOne);
router.post("/add", customerController.add);
router.patch("/update", customerController.update);
router.delete("/delete", customerController.remove);



module.exports = router;