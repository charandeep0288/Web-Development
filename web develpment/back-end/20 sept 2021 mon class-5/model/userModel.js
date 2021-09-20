
// linked database
const mongoose = require('mongoose'); // node js mai require kiya mongoose koo

const {db_link} = require('../secrets.js'); // destructuring

const validator = require("email-validator");

mongoose.connect(db_link).then(function(db){ // fn argument mai db milta hai
    console.log('db connected'); // identification mark hai ik tara sa ki db connect hoo gya hai
    // console.log(db);
})
.catch(function(err){
    console.log(err);
});


// created user Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String, // datatype kya hoga name kaa -> String type hoga
        required: true,
    },
    age: {// optional hai reqiured nahi rakha hai yaa
        type: Number, 
    },
    email: {
        type: String, 
        required: true, // name dala user kali naa chodra user
        unique: true, // same email id sa doo account nahi bana sakta
        validate: function(){
            return validator.validate(this.email);// validate kara gaa joo email aya gi humari
        }
    },
    createdAt: {
        type: Date, 
    },
    password: {
        type: String, 
        required: true,
        min: 8, // minimum 8 characters hona chahia password mai
    },
    confirmPassword: {
        type: String, 
        required: true, // khali nahi chod sakta yaa field -> error throw hogi agar fill nahi kiya tho
        min: 8,
        validator: function(){
            return this.password == this.confirmPassword;
        },
    },
});


userSchema.pre('save', function(){ // hum chata hai ki pre -> data save karna se phala chala
   this. confirmPassword = undefined; // confirmPassword -> db mai save nahi hoga humara 
});

// created user Model
const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel; // exporting user model to use in server.js

// group of documents is called a collection

// ife -> imideiate function enwoke
// (async function createUser(){
//     // creating user document
    // let user = {
    //     name: 'Charandeep', 
    //     age: 20, 
    //     email: 'ckausel123@gmail.com',
    //     password: '123456789',
    //     confirmPassword: '123456789',
    // };

//     // userModel.create() -> promise based function
//     let userObj = await userModel.create(user); // user bheja gaa argument mai 
//     console.log(userObj);
// })(); // called this function here -> ife
