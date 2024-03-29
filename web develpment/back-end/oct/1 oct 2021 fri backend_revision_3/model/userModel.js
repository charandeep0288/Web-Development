// npm i email-validatior mongoose


// linked database
const mongoose = require("mongoose");

const validator = require("email-validator");

let { db_link } = require("../secrets");

// this as promise based fn
mongoose.connect(db_link)
    .then(function(connection) {
        // console.log("connection", connection);
        console.log("db has been connectd");
    }).catch(function(error) {
        console.log("err", error);
    });


// mongoose -> data coming is -> exactly same -> data that is reqired to from an entity
// mongoose check for -> data completness, data validation

// name, email, password -> min, max, confirmPassword, required, unique
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    email:  {
        type: String,
        required: true,
        // unique -> ka matlab duplicate email se user nahi bana sakta
        // unique: true,

        validate: function() {
            // third party validation library
            return validator.validate(this.email);
        }
    }, 
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    confirmPassword: {
        type: String,
        required: true,
        minlength: 8,
        validate: function() {
            return this.password == this.confirmPassword; // password & confirmPassword same hai tho hi woo valid hai password
        }
    },
    createAt: {
        type: String,
    }
});

// model
let userModel = mongoose.model("UserModel", userSchema);

module.exports = userModel;