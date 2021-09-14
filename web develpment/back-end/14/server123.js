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

// static -> matlab humari static hai files,,, 'public' -> path specify kiya hai
app.use(express.static('public'));

const userRouter = express.Router(); // user kaa router bana dia
const authRouter = express.Router(); // router banya hai authentication kaa lia

app.use('/user', userRouter); // '/user' base route hai
app.use('/auth', authRouter);

// mounting in express
userRouter
.route('/') // user pai route daa raha hai
.get(getUser)
.post(createUser)
.patch(updateUser)
.delete(deleteUser);

userRouter 
.route('/:id')
.get(getUserById);

authRouter
.route('/signup') // 
.post(signupUser);

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
app.get('/', (req, res) => {
   res.send('Home Page'); 
});

// app.get('/user', getUser);

function getUser(req, res){
    res.json(user);
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

