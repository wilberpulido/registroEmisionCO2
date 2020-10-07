const register = require('../controller/travelRegistration');

const express = require('express');
const router = express.Router();

router.use('/travelRegistration',register);


module.exports = router;