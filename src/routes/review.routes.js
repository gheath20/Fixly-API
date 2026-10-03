const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/Review.controllers");
router.get("/", ReviewController.getAll);
router.get("/id",ReviewController.getOne);
router.post("/add", ReviewController.add);
router.patch("/update", ReviewController.update);
router.delete("/delete", ReviewController.remove);



module.exports = router;