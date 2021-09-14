const express = require('express');
const app = express();

// this app is listening to the port 5000 continously
app.listen('5000', function(){
    console.log('server listening on port 5000');
});

// .use() fn -> middle ware function 
app.use(express.json());

let user = {};
 
// CRUD - create read update delete


// get request -> to get data 
// client <- pai data mangva raha hai 'server' sa
// read
app.get('/', (req, res) => {
   res.send('Home Page'); 
});

app.get('/user', (req, res) => {
    res.json(user);
});

// post request -> data bhejna 
// client se -> data bhej raha hai 'sever' koo
// create
app.post('/user', (req, res) => {
    user = req.body; 
    console.log(req.body);
    res.send('data has been added sucessfully');
});

// patch request -> (to update value in existing object we have)
// update
app.patch('/user', (req, res) => {
    let obj = req.body; 

    for(let key in obj){ // for in loop
        user[key] = obj[key];
    }

    res.json(user); // to send response in json format
});


// delete request -> to delete data 
// delete
app.delete('/user', (req, res) => {
    user = {};
    res.json(user);
    res.send('user have been deleted'); // to send this data to the user
});

// ---------------------------------------
// 14 sep 2021 tue class-2 of backend

// https://localhost:5000/user/

// param route
app.get('user/:id', (req, res) => {
    console.log(req.params.id);
    // res.send(req.params);
    // res.send(req.params.id);
    res.json(req.params.id); // yaa joo bhi data milta JSON format mai convert kar daata hai
});