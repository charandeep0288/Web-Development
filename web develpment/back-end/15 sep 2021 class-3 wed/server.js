// y7SgMJ0YecGtwBdz
// localhost:5000/user/id="vbrfw7v8f32ur"&data=10ef // use of '&'

const express = require('express');
const app = express();

// const router = express.Router();

// this app is listening to the port 5000 continously
app.listen('5000', function(){
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

// app.use((req, res, next) => {
//     // do some work
//     console.log('I am a middleware 3rd time');
//     next(); // matlab mara kam hoo gya app.use() kaa bahar laa aya gaa & next fn ko control dai gaa
// });

// userRouter 
// .route('/:id')
// .get(getUserById);

authRouter
.route('/signup') // '/auth' kaa baad '/signup' pai route kar raha hai
.post(signupUser);

authRouter
.route('/forgetPassword')
.get(getforgetpassword)
.post(postforgetpassword, validateEmail); // postforgetpassword() -> kaa baad validateEmail() fn chala gaa

// redirects -> new request bhejta hai puri file dubara chalti
app.get('/user-all', (req, res) => { // '/user-all' 
    res.redirect('/user');
});

// 404 page
// aur yaa hum ikdam last mai lika gaa file kaa 
// It is middle ware fn hai yaa & har baar chala gaa (for 404 page)
app.use((req, res) => { // yaa app.use() -> har bar run kara gaa
    res.sendFile('public/404.html', {root:__dirname});
});


// https://expressjs.com/en/guide/using-middleware.html

function getforgetpassword(req, res){
    res.sendFile('./public/forgetPassword.html', {root:__dirname});
}

function postforgetpassword(req, res, next){
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

function validateEmail(req, res){
    console.log('in validateEmail function');
    console.log(req.body); // 

    // hw to check if email is correct or note -> @, .
    // indexOf
    res.json({
        message: "data received",
        data: req.body,
    });
}

function signupUser(req, res){
    // let userDetails = req.body; // req.body -> mai hai data user kaa
    // let name = userDetails.name;
    // let email = userDetails.email;
    // let password = userDetails.password;

    let {email, name, password} = req.body; // destructuring 
    user.push({email, name, password}); // joo user naa data dala hai woo 'user' vala array mai dal raha hai
    console.log('user', req.body);

    // yaa response humara index.html mai jaa rah hai joo pubkic folder mai hai
    res.json({
        message: 'user signedUp',
        user: req.body,
    });
};

let user = []; // array
 
// CRUD - create read update delete

// read
// app.get('/', (req, res) => { // yaa vali agar .get ki command hata dai gaa tho -> error aya gii -> iss case mai https://localhost:5000/
//    res.send('Home Page'); 
// });

// app.get('/user', getUser);

function getUser(req, res){
    console.log('getUser called');
    res.json(user); // agar yaa response ki statment hata dai gaa tho hanging state mai chala jai gaa yaa 
}


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

    for(let key in obj){ // for in loop
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
