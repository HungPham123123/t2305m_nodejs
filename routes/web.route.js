const express = require("express");
const router = express.Router();

const web_controller = require("./../controller/web.controller")
router.get("/",web_controller.student_get);
router.get('/students/new', web_controller.form_new);
router.post('/students', web_controller.save_student);

module.exports = router;