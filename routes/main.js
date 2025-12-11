const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("/menu", mainController.menu);
router.get("/item/:id", mainController.item);

module.exports = router;
