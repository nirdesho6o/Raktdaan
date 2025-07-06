const express = require('express');
const router = express.Router();
const OurTeamController = require('../Controllers/OurTeamController');

const ourTeamController=new OurTeamController();
router.get('/get-team',ourTeamController.getTeam);
module.exports = router;