const express = require('express');
const app = express();

// this app is listening to the port 5000 continously
app.listen('5000', function(){
    console.log('server listening on port 5000');
});

// .use() fn -> middle ware function 
app.use(express.json());

let user = {};
 
// get request -> to get data 
// client <- data mangva raha hai 'server' sa
app.get('/', (req, res) => {
   res.send('Home Page'); 
});

app.get('/user', (req, res) => {
    res.json(user);
});

// post request -> data bhejna
// client se -> data bhej raha hai 'sever' koo
app.post('/user', (req, res) => {
    user = req.body; 
    console.log(req.body);
    res.send('data has been added sucessfully');
});

// patch request -> (to update value in existing object we have)
app.patch('/user', (req, res) => {
    let obj = req.body; // 

    for(let key in obj){ // for in loop
        user[key] = obj[key];
    }

    res.json(user);
});


// delete request -> 
app.delete('/user', (req, res) => {
    user = {};
    res.json(user);
    res.send('user have been deleted'); // to send this data to the user
});

