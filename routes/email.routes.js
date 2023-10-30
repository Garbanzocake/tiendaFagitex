const { Router } = require("express");
const { check } = require("express-validator");
const { enviarCorreo } = require("../controllers/email.controller");


const router = Router();


router.post('/sendEmail',enviarCorreo);




module.exports = router;