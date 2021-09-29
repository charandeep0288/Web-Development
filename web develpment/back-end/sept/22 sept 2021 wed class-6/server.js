// 
// localhost:5000/user/id="vbrfw7v8f32ur"&data=10ef // use of '&'

const express = require('express');

const app = express();
const cookieParser = require('cookie-parser'); // poplute kar daata hai cookies koo request mai 
app.use(cookieParser()); // cookies arrage karata hai huma yaa

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

const userRouter = require('./Routers/userRouter'); 
const authRouter = require('./Routers/authRouter');

// const userRouter = express.Router(); // user kaa router bana dia
// const authRouter = express.Router(); // router banya hai authentication kaa lia

app.use((req, res, next) => {
    // do some work
    console.log('I am a middleware 2nd time');
    next(); // matlab mara kam hoo gya app.use() kaa bahar laa aya gaa & next fn ko control dai gaa
});

app.use('/user', userRouter); // '/user' base route hai
app.use('/auth', authRouter); // '/auth' base route hai


// app.use((req, res, next) => {
//     // do some work
//     console.log('I am a middleware 3rd time');
//     next(); // matlab mara kam hoo gya app.use() kaa bahar laa aya gaa & next fn ko control dai gaa
// });


// ---------------------------------------
// REDIRECTS -> new request bhejta hai puri file dubara chalti
app.get('/user-all', (req, res) => { // '/user-all' 
    res.redirect('/user');
});


// ---------------------------------------
// 404 PAGE
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



// https://stackoverflow.com/questions/30011267/create-an-empty-file-on-the-commandline-in-windows-like-the-linux-touch-command
// npm install touch-cli -g yeh install krne se chl jaata ha
