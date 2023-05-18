const express = require('express');
const emailsRouter = require('./emails.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/emails', emailsRouter);

module.exports = router;