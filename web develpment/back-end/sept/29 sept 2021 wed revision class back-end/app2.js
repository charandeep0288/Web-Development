// npm init -y
// npm i express

const express = require("express")
const fs = require("fs");

const app = express();



// // inbuilt methods of express has next() already implemented
// // always use me
// // express json -> req.body add 
app.use(express.json()); 

app.listen(8081, function(){
    console.log("server started");
});

// --------------------------------------------
// explained next() concept here 
app.post("/", function(req, res){
    let body = req.body;
    console.log("inside first post ", body);
    next(); // next middleware fn ko call kar doo
});

app.use(function(req, res, next){
    console.log("inside app.use ");
    next();
});

app.get("/", function(req, res, next){
    let body = req.body;
    console.log("inside first get ", body);
});

app.post("/", function(req, res){
    let body = req.body;
    console.log("inside second post ", body);
    res.send("tested next");
});

