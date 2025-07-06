const express = require('express');
const router = express.Router();
const ServiceController = require('../Controllers/ServiceController');

const serviceController=new ServiceController();
router.get('/services', (req, res) => serviceController.getData(req, res));
module.exports = router;