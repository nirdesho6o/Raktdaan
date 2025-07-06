const express = require('express');
const router = express.Router();
const ContactController = require('../Controllers/ContactController');

const contactController=new ContactController();
router.post('/contact',contactController.add);
module.exports = router;