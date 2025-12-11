const express = require("express");
const router = express.Router();
const admin = require("../middleware/auth");
const adminController = require("../controllers/adminController");

router.get("/login", adminController.loginPage);
router.post("/login", adminController.login);
router.get("/pin", adminController.pinPage);
router.post("/pin", adminController.verifyPin);

router.get("/dashboard", admin.ensureAdmin, adminController.dashboard);
router.get("/items", admin.ensureAdmin, adminController.items);
router.post("/items/update", admin.ensureAdmin, adminController.updateItem);
router.get("/orders", admin.ensureAdmin, adminController.orders);
router.post("/orders/update", admin.ensureAdmin, adminController.updateOrder);

module.exports = router;
