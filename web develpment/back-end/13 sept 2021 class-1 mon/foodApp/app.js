// npm init -y
// npm install express
// npm i nodemon -g

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


// SIR GITHUB REPO LINK
// https://github.com/goelabhishek694/pep_backend


const express = require('express');

// server creation
const app = express();
let port = '8080';
app.listen(port, function(){
    console.log(`server is listening on port ${port}`);
});

// types of request => get, post, put, delete
app.get('/', (req, res) => {
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    console.log('hello from home page');
    res.send('<h1>hello hi from backend</h1>');
});

let obj = {
    'name' : 'Charandeep Singh',
};

// req -> request 
// res -> response
app.get('/user', (req, res) => {
    console.log('user');
    res.json(obj);
});

app.get('/home', (req, res) => {
    // console.log('user');
    console.log(__dirname);

    // {root:__dirname} => direct path nahi diya file kaa iss lia yaa likha raha hai  
    res.sendFile('./views/index.html', {root:__dirname}); // to send whole file as a response
});


// app.get('/home', (req, res) => {
//     console.log(req.hostname);
//     console.log(req.path);
//     console.log(req.method); // 
//     res.send('hello'); // response bhej raha hai

//     // we can have only one send request at a time.
//     // WE CAN SEND ONE REQUEST AT A TIME
//     // res.send('<h1>hello</h1>');

//     res.end(); // to end the response
// });

