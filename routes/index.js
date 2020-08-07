const express = require('express');
const router = express.Router(); // Crea las rutas

router.get('/', (req, res) => {
    res.render('index', {title : 'Dant Corp.'}); 
});


router.get('/contact', (req, res) => {
    res.render('contact', {title : 'Contacto'}); 
});

module.exports = router;