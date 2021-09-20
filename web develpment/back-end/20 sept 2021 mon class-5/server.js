// 
// localhost:5000/user/id="vbrfw7v8f32ur"&data=10ef // use of '&'

const express = require('express');
const app = express();

// const router = express.Router();

// this app is listening to the port 5000 continously
app.listen('5000', function () {
    console.log('server listening on port 5000');
});

// .use() fn -> middle ware function 
app.use(express.json()); // to recognize incoming request object as a JSON object

// app.use((req, res, next) => {
//     // do some work
//     console.log('I am a middleware');
//     next(); // matlab mara kam hoo gya app.use() kaa bahar laa aya gaa & next fn ko control dai gaa
// });

// static -> matlab humari static hai files,,, 'public' -> path specify kiya hai
app.use(express.static('public'));

const userRouter = express.Router(); // user kaa router bana dia
const authRouter = express.Router(); // router banya hai authentication kaa lia
const forgetPasswordRouter = express.Router();

app.use((req, res, next) => {
    // do some work
    console.log('I am a middleware 2nd time');
    next(); // matlab mara kam hoo gya app.use() kaa bahar laa aya gaa & next fn ko control dai gaa
});

app.use('/user', userRouter); // '/user' base route hai
app.use('/auth', authRouter); // '/auth' base route hai

// mounting in express
userRouter
    .route('/') // user pai route daa raha hai -> get post patch delete
    .get(getUser)
    .post(createUser)
    .patch(updateUser)
    .delete(deleteUser);


// create
// app.post('/user', createUser);
function createUser(req, res) {
    user = req.body;
    console.log(req.body);
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

// app.use((req, res, next) => {
//     // do some work
//     console.log('I am a middleware 3rd time');
//     next(); // matlab mara kam hoo gya app.use() kaa bahar laa aya gaa & next fn ko control dai gaa
// });

userRouter
    .route('/:id')
    .get(getUserById);

authRouter
    .route('/signup') // '/auth' kaa baad '/signup' pai route kar raha hai
    .post(setCreatedAt, signupUser);


function setCreatedAt(req, res, next) {
    let obj = req.body;
    // key ka arr -> uska length
    let length = Object.key(obj).length;
    if (length == 0) { // matlab check kar rah hai ki data exisit karta hai ki nahi
        // 400 status code -> Bad Request
        return res.status(400).json({ message: "cannot create user if req.body is empty" }); // chaining 
    }

    req.body.createAt = new Date().toISOString(); // date dai gaa huma & usa string mai convert kar raha hai
    next(); // matlab mara next vala middleware fn chala doo
}

const userModel = require('./models/userModel'); // joo bhi file require karta hai hum woo humari puri complie hoo kai run hoo kai fir aya gi yaha pai
function signupUser(req, res) {
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

authRouter
    .route('/forgetPassword')
    .get(getforgetpassword)
    .post(postforgetpassword, validateEmail); // postforgetpassword() -> kaa baad validateEmail() fn chala gaa


// https://expressjs.com/en/guide/using-middleware.html

function getforgetpassword(req, res) {
    res.sendFile('./public/forgetPassword.html', { root: __dirname });
}

function postforgetpassword(req, res, next) {
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

    // hw to check if email is correct or note -> @, .
    // indexOf
    res.json({
        message: "data received",
        data: req.body,
    });
}

// redirects -> new request bhejta hai puri file dubara chalti
app.get('/user-all', (req, res) => { // '/user-all' 
    res.redirect('/user');
});

// 404 page
// aur yaa hum ikdam last mai lika gaa file kaa 
// It is middle ware fn hai yaa & har baar chala gaa (for 404 page)
app.use((req, res) => { // yaa app.use() -> har bar run kara gaa
    res.sendFile('public/404.html', { root: __dirname });
});

// -------------------------------
let user = []; // array

// CRUD - create read update delete

// read
// app.get('/', (req, res) => { // yaa vali agar .get ki command hata dai gaa tho -> error aya gii -> iss case mai https://localhost:5000/
//    res.send('Home Page'); 
// });

// app.get('/user', getUser);

function getUser(req, res) {
    console.log('getUser called');
    res.json(user); // agar yaa response ki statment hata dai gaa tho hanging state mai chala jai gaa yaa 
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
