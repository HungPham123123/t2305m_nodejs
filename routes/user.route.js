const express = require("express");
const router = express.Router();
const controller = require("../controller/user.controller");

router.get("/register", controller.register);
router.post("/register", controller.postRegister);
router.get("/login", controller.open_login);

router.get("/reset", controller.show_reset_request);
router.post("/reset", controller.reset_password_request);

router.get("/reset/:token", controller.show_reset);
router.post("/reset_password", controller.reset_password);

module.exports = router;
