// https://chat.whatsapp.com/Kx3zkr401i06bPIsCn1KUA


const express = require('express');
const userRouter = express.Router(); // user kaa router bana dia
const userModel = require('../models/userModel');
const protectRoute = require('./authHelper');

// routers -------------------------------------------------

// mounting in express
userRouter
    .route('/') // user pai route daa raha hai -> get post patch delete
    .get(protectRoute, getUsers)
    .post(createUser)
    .patch(updateUser)
    .delete(deleteUser);


userRouter
    .route('/:id')
    .get(getUserById);

// function =================================================

async function getUsers(req, res) {
    try {
        console.log('getUser called');
        let users = await userModel.find(); // DB se users aa raha hia
        if (users) {
            return res.json(users); // return lagna jaruri hai
        }
        else {
            return res.json({ // return lagna jaruri hai
                message: 'user not found',
            });
        }
    }
    catch (err) {
        return res.json({
            message: err.message,
        });
    }
    // res.json(user); // agar yaa response ki statment hata dai gaa tho hanging state mai chala jai gaa yaa 
}

// post request
// client -> server
// create
// app.post('/user', createUser);
function createUser(req, res) {
    user = req.body;
    // console.log(req.body);
    res.send('data has been added sucessfully');
}

// update
// app.patch('/user', updateUser);
function updateUser(req, res) {
    let obj = req.body;

    for (let key in obj) { // for in loop
        user[key] = obj[key];
    }

    res.json(user); // to send response in json format
}


// delete
// app.delete('/user', deleteUser);
function deleteUser(req, res) {
    user = {};
    res.json(user);
    res.send('user have been deleted'); // to send this data to the user
}

// https://localhost:5000/user/

// param route
// app.get('user/:id', getUserById);

function getUserById(req, res) {

    console.log(req.params.id);
    // res.send(req.params);
    // res.send(req.params.id);
    res.json(req.params.id); // yaa joo bhi data milta JSON format mai convert kar daata hai ans response bhejta hai
}

module.exports = userRouter;