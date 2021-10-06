// npm init -y
// npm i express

const express = require("express");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./secrets");
const cookieParser = require("cookie-parser");
const userModel = require("./model/userModel");

// Server // route -> request -> response/file/..
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
app.use(cookieParser());

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

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

userRouter
  .route("/")
  // localhost/user -> get
  .get(protectRoute, getUsers);
// localhost/user -> post
// .post(bodyChecker, createUser);

authRouter.route("/signup").post(bodyChecker, signupUser);

authRouter.route("/login").post(bodyChecker, loginUser);

function getUsers(req, res) {
  res.status(200).json({
    message: content,
  });
}

function protectRoute(req, res, next) {
  try {
    console.log("reached body checker");

    // cookie-parser
    console.log("93", req.cookies);
    // jwt.verify();

    let decryptedToken = jwt.verify(req.cookies.JWT, JWT_SECRET);
    console.log("97", decryptedToken);
    //jwt -> verify everytime that if you are brining the token to get your response

    // let isallowed = true;
    // isallowed -> true -> user aga jaa sakta hai next middleware fn pai i.e, getUser()
    //  isallowed -> false -> user aga nahi jaa sakta hai next middleware fn pai i.e, getUser()

    if (decryptedToken) {
      next();
    } else {
      res.send("kindly login to access this resource");
    }
  } catch (err) {
    console.log(err);
    res.status(200).json({
      message: err.message,
    });
  }
}

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

async function signupUser(req, res) {
  try {
    let newUser = await userModel.create(req.body);

    res.status(201).json({
      message: "user created sucessfully",
      user: newUser,
    });
    
  } catch (err) {
    console.log("signup User error: ", err);
    res.status(500).json({
      message: err.message,
    });
  }
}

function loginUser(req, res) {
  let { email, password } = req.body;
  let obj = content.find((obj) => {
    return obj.email == email;
  });

  if (!obj) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  if (obj.password == password) {
    let token = jwt.sign({ email: obj.email }, JWT_SECRET);
    console.log(token);
    //header
    res.cookie("JWT", token);

    // sign with RSA SHA256
    // res body
    res.status(200).json({
      message: "user logged In",
    });
  } else {
    res.status(422).json({
      message: "password dosen't match",
    });
  }
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
