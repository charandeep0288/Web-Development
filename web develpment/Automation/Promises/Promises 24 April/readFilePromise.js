// main stack kahali hoga thabi resolve run honga promise kaa
// main stack mai phala sara code run hoga aur async vali sari chiza memory mai khali create honge, 
// fir jab sara code run hoo chuka hoga aur main stack khali hogi tho async vala kam main stack mai hoga (callback queue mai joo bhi callbacks padhri hai ) 

const fs = require("fs"); // fs module ka sara code fs name ka varible ka andar store hoga

// fs.promises.readFile run on web API
let readFilePromise = fs.promises.readFile("1.txt", "utf-8");

// fs.promises.readFile => read kar ka lia aya gaa lakin file read nahi hui hai abhi because web API mai
// web API mai run honga tho promise pending aya gaa
// console.log(readFilePromise);      // Promise { <pending> }

// readFilePromise.then(function(data){
//     console.log(data); // print data of 1.txt file

//     // promise value joo resolve hoo gai hai 
//     console.log(readFilePromise); //  Promise { '4\r\n5\r\n5\r\n4\r\n57575\r\n54\r\n2\r\n42\r\n24\r\n' }
// }).catch(function(err){
//     console.log(readFilePromise);  // print promise rejected value
// });

// .then parallel nahi chalta aur main stack mai chalta hai

// CHAINING => .then pai ik aur .then  ...... aur jitna marji .then laga sakta hai
readFilePromise.then(function(data){ // then 1
    console.log("Hello2 I ran second");
}).then(function(data){ // then 3 memory mai kahi bana hai, lakin execute nahi kia abi, kio ki queue mai mara se pahla aur bhi call backs hai
    console.log(data + " I ran fourth "); // undefined I ran fourth  ............ print undefined because pichla .then na kuch return nahi kia
}).catch(function(err){
    console.log(err);
});

// kuch kam kar lia 
// .then resolve nahi hua abhi koi, tho iss lia yaa pahla chala gaa
console.log("I ran first"); // issa yaa pata chalta hia fs.promise.readFile web API mai chalti hai na ki mai stack pai

readFilePromise.then(function(data){ // then 2 memory mai kai ban gia  
    console.log("Hello3 I ran third");
    return "Hello5"; // return promise ko kar raha hai 
}).then(function(data){
    console.log(data + " I ran fifth"); // print Hello5 I ran fifth
}).catch(function(err){
    console.log(err);
});
// node readFilePromise.js