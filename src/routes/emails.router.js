const { send, contact } = require('../controllers/emails.controllers');
const express = require('express');

const emailsRouter = express.Router();

emailsRouter.route('/send') // /emails/send
    .post(send);

emailsRouter.route('/contact')
    .post(contact);

module.exports = emailsRouter;