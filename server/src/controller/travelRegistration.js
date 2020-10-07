const express = require('express');
const router = express.Router();
const TravelManagement = require('../services/TravelManagement');

router.post('/', async(req,res)=>{

    const result = await TravelManagement.createTravel(req.body["travel"]);

    if (result) {
        res.status(200).send(true);

    } else {
        res.status(400).send(false);
    }
});


router.get('/', async(req,res)=>{

    const dataTravels = await TravelManagement.alltravels();
    console.log(dataTravels);

    res.status(200).send(dataTravels);

    
});


module.exports = router;