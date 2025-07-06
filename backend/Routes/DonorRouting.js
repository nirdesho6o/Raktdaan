const express = require('express');
const router = express.Router();
const DonorController = require('../Controllers/DonorController');

const donorController=new DonorController();
router.post('/donor',donorController.add);
module.exports = router;