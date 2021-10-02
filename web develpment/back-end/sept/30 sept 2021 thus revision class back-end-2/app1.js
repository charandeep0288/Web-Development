// npm init -y
// npm i express

const express = require("express")
const fs = require("fs");
const path = require("path");

const app = express();

// this line 
// post -> '/'
// app.post("/", function(req, res){

//     let body = req.body;
//     console.log("before", req.body);
//     next(); // next middleware fn ko call kar doo
// });


// reserve a folder only from which client can access the files
app.use(express.static("Frontend_folder"));

// // inbuilt methods of express has next() already implemented
// // always use me
// // express json -> req.body add
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

// const userRouter = express.Router();
const authRouter = express.Router();
// app.use('/user', userRouter);
app.use('/auth', authRouter);

// userRouter
//     .route('/')
//     // localhost/user -> get
//     .get(getUsers)
//     // localhost/user -> post
//     .post(bodyChecker, createUser); 


authRouter.route('/signup')
    .post(bodyChecker, signupUser);

function bodyChecker(req, res, next) {
    console.log("reached body checker");
    let isPresent = Object.keys(req.body).length;

    console.log("ispresent", isPresent);
    if (isPresent) {
        next();
    } else {
        res.send("Kind send details in body");
    }
}

function signupUser(req, res) {
    let { name, email, password, confirmPassword } = req.body;
    console.log("res.body", req.body);

    if(password === confirmPassword) {
        let newUser = { name, email, password } ;

        // entery put
        content.push(newUser);
        console.log("content arr", content);

        //save in datastorage
        fs.writeFileSync("data.json", JSON.stringify(content));

        res.status(201).json({
            createUser: newUser
        });
    } else {
        res.status(422).json({
            message: "password and confirm password do not match"
        });
    };
}

// userRouter  
//     .route("/:id")
//     // localhost/user/10 -> post
//     .get(getUser);


// authRouter.route("/").post(signupUser);

// authRouter.route("/:id").patch(forgetPassword);


function createUser(req, res) {
    console.log("create User");

    let body = req.body;
    console.log("req.body", req.body);
    contentPush(body);

    // put data storage 
    fs.writeFileSync("./data.json", JSON.stringify(content));
    res.json({
        message: content,
    });
};


function getUsers(req, res) {
    res.json({ message: content });
}



app.listen(8081, function () {
    console.log("server started");
});


// // --------------------------------------------
// // explained next() concept here 
// app.post("/", function (req, res) {
//     let body = req.body;
//     console.log("inside first post ", body);
//     next(); // next middleware fn ko call kar doo
// });

// app.use(function (req, res, next) {
//     console.log("inside app.use ");
//     next();
// });

// app.get("/", function (req, res, next) {
//     let body = req.body;
//     console.log("inside first get ", body);
// });

// app.post("/", function (req, res) {
//     let body = req.body;
//     console.log("inside second post ", body);
//     res.send("tested next");
// });


// -------------------------------------------
// 404 page
app.use(function (req, res) {
    let rest_of_the_path = path.join("./Frontend_folder", "404.html");
    console.log("rest_of_the_path", rest_of_the_path);
    
    res.status(404).sendFile(path.join(__dirname, rest_of_the_path));

    // res.status(404).sendFile(path.join(__dirname, "404.html"));
});



// --------------------------------------------



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