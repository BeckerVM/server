const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');

router.get('/', (req, res) => {
    res.send('Ruta funcionando');
})


module.exports = router;
