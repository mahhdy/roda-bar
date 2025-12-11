const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/add", orderController.add);
router.get("/cart", orderController.cart);
router.post("/checkout", orderController.checkout);
router.get("/track/:id", orderController.track);

module.exports = router;
