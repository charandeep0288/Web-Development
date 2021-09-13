const express = require('express');
const app = express();

// this app is listening to the port 5000 continously
app.listen('5000', function(){
    console.log('server listening on port 5000');
});

let user = {};

app.get('/', (req, res) => {
   res.send('Home Page'); 
});

app.get('/user', (req, res) => {
    res.json(user);
});