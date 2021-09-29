// npm init -y
// npm i express

const express = require("express")
const fs = require("fs");

const app = express();

// this line 
// post -> '/'
// app.post("/", function(req, res){

//     let body = req.body;
//     console.log("before", req.body);
//     next(); // next middleware fn ko call kar doo
// });

// // inbuilt methods of express has next already implemented

// // express json 
app.use(express.json()); 

// app.post("/", function(req, res){

//     let body = req.body;
//     console.log("after", req.body);
//     res.status(200).json({
//         message: body
//     });
// });

// function -> route  path
// frontend -> req -> /

// app.get("/", function(req, res){
//     console.log("hello from home page");
//     // res.send("<h1>Hello from Backend</h1>");

//     let content = JSON.parse(fs.readFileSync("./data.json"));
//     console.log(content);
//     res.status(200).json({
//         message: content
//     });
// });


// function -> route path
// frontend -> req -> /
// read data storage
// localhost/user/10 -> post
let content = JSON.parse(fs.readFileSync("./data.json"));

const userRouter = express.Router();
const authRouter = express.Router();
app.use('/user', userRouter);
app.use('/auth', authRouter);

userRouter
    .route('/')
    // localhost/user -> get
    .get(getUsers)
    // localhost/user -> post
    .post(bodyChecker, createUser);
    

// userRouter  
//     .route("/:id")
//     // localhost/user/10 -> post
//     .get(getUser);


// authRouter.route("/").post(signupUser);

// authRouter.route("/:id").patch(forgetPassword);


// authRouter

function createUser(req, res){
    console.log("create User");
    
    let body = req.body;
    console.log("re.body", req.body);
    contentPush(body);

    // put data storage 
    fs.writeFileSync("./data.json", JSON.stringify(content));
    res.json({
        message: content,
    });
};

function bodyChecker(req, res, next){
    console.log("reached body checker");
    let isPresent = Object.keys(req.body).length;

    console.log("ispresent", isPresent);
    if(isPresent.length){
        next();
    } else {
        res.send("Kind send details in body");
    }
}

function getUsers(req, res){
    res.json({message: content});
}

// app.put("/", function(req, res){
//     console.log("hello from home page");
//     res.send("<h1>Hello from Backend</h1>");
// });


// app.update("/", function(req, res){
//     console.log("hello from home page");
//     res.send("<h1>Hello from Backend</h1>");
// });


// app.delete("/", function(req, res){
//     console.log("hello from home page");
//     res.send("<h1>Hello from Backend</h1>");
// });


app.listen(8081, function(){
    console.log("server started");
});