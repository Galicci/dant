const express = require('express');
const app = express ();
const path = require('path');
const indexRoute = require('./routes/index')

// SETS
app.set('port', 4000);
app.set('views', path.join(__dirname + '/views'));
app.set ('view engine', 'ejs')


//routes 
app.use(indexRoute);
    
// static files
app.use(express.static(path.join(__dirname + '/public')));

// SERVER LISTENS
app.listen(app.get('port'), () => {
    console.log('Server listens to port ', app.get('port'));
});