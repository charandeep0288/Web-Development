const express = require('express');
const userRouter = express.Router(); // user kaa router bana dia
const userModel = require('./models/userModel'); // joo bhi file require karta hai hum woo humari puri complie hoo kai run hoo kai fir aya gi yaha pai
const authRouter = express.Router(); // router banya hai authentication kaa lia
// const cookieParser = require('cookie-parser');
// const forgetPasswordRouter = express.Router();


// ===== routers ======================================

authRouter
    .route('/signup') // '/auth' kaa baad '/signup' pai route kar raha hai
    .post(setCreatedAt, signupUser);

authRouter
    .route('/forgetPassword')
    .get(getForgetPassword)
    .post(postForgetPassword, validateEmail); // postforgetpassword() -> kaa baad validateEmail() fn chala gaa

authRouter
    .route('/login')
    .post(loginUser);

// functions =======================================

function setCreatedAt(req, res, next) {
    let obj = req.body;
    // key ka arr -> uska length
    let length = Object.keys(obj).length;
    if (length == 0) { // matlab check kar rah hai ki data exisit karta hai ki nahi
        // 400 status code -> Bad Request
        return res.status(400).json({ message: "cannot create user if req.body is empty" }); // chaining 
    }

    req.body.createAt = new Date().toISOString(); // date dai gaa huma & usa string mai convert kar raha hai
    next(); // matlab mara next vala middleware fn chala doo
}

// const userModel = require('./models/userModel'); // joo bhi file require karta hai hum woo humari puri complie hoo kai run hoo kai fir aya gi yaha pai
async function signupUser(req, res) {
    // let userDetails = req.body; // req.body -> mai hai data user kaa
    // let name = userDetails.name;
    // let email = userDetails.email;
    // let password = userDetails.password;

    try {
        let userObj = req.body;
        // let { email, name, password } = req.body; // destructuring 
        // user.push({ email, name, password }); // joo user naa data dala hai woo 'user' vala array mai dal raha hai
        // console.log('user', req.body);

        // create document in userModel
        let user = await userModel.create(userObj);
        console.log('user', user);

        // yaa response humara index.html mai jaa rah hai joo public folder mai hai
        res.json({
            message: 'user signedUp',
            user: userObj,
        });
    }
    catch (err) {
        console.log(err);
        req.json({ message: err.message });
    };
};



// https://expressjs.com/en/guide/using-middleware.html

function getForgetPassword(req, res) {
    res.sendFile('./public/forgetPassword.html', { root: __dirname });
}

function postForgetPassword(req, res, next) {
    let data = req.body;
    console.log('data', data);

    // check if email id in correct - validate
    next();

    // ckeck if user exists in db
    // res.json({
    //     message: "data received",
    //     data: data.email,
    // });
};

function validateEmail(req, res) {
    console.log('in validateEmail function');
    console.log(req.body); // 

    // --=-=-=-=-=-==-=--==--=--==---===--=--=-=--=-=-=--==-
    // hw to check if email is correct or note -> @, .
    // indexOf
    res.json({
        message: "data received",
        data: req.body,
    });
}

function loginUser(req, res) {
    try {
        // email password (aya gaa huamra pass)
        if (req.body.email) {
            let user = await userModel.findOne({ email: req.body.email });
            if (user) {
                if (req.body.password == user.password) {

                    // res.cookies('Name_of_cookies', 'token', {httpOnly: true});
                    // token -> when we goo to gurudware token milta hai
                    // {httpOnly: true} -> is a flag added to cookies that tell the browser not to display the cookie through client-side scripts
                    res.cookies('login', '1234', {httpOnly: true});

                    return res.json({
                        message: "user logged in",
                    });
                }
                else {
                    return res.json({
                        message: "email or password is wrong",
                    });
                }
            }
            else {
                return res.json({
                    message: "email or password is wrong",
                });
            }
        }
        else {
            return res.json({
                message: "user is not present",
            });
        }
    }
    catch (err) {
        // 500 -> server error
        return res.status(500).json({
            message: err.message,
        });
    }
}

module.export = authRouter;