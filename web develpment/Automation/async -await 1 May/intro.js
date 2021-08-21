// async function abc(){
//     console.log("hello");
//     return "abc";
// }
// let temp = abc();
// console.log(temp); // return promise resolve value => Promise { 'abc' }
// /*
// hello
// Promise { 'abc' }
//  */



// // BOTH CODE ARE SAME => ACYNC FUNCTION KO PROMISES MAI CONVERT KIA HAI

// function abc(){
//     return new Promise( function(res, rej){
//         console.log("hello");
//         res("abc");
//     })
// };
// let temp1 = abc();
// console.log(temp1);


// async function abc(){
//     console.log("hello");
//     throw "abc";
// }
// let temp2 = abc();
// console.log(temp2);  // Promise { <rejected> 'abc' } 


//=--------------------------------------------------------------


// this will not work => 
// async function abc(){
//     return setTimeout(function(){
//         return "abc";
//     })
//     // return undefined; // hoo gai gaa
// }
// let temp2 = abc();
// console.log(temp2);


//==-----------------------------------------


// const fs = require("fs");

// async function abc() {
//     // fs.promises.readFile =>  run on web API
//     // step 1 - .then mai uska nicha ki sari lines dalna se phala , fs.promises.readFile() joo value read ki hogi( promise value ) woo (data) name ka variable mai store kara gaa
//     // step 2 - fs.promises.readFile => promise hai , aur iska .then mai uska nicha ki sari lines aya gii 
//    let data = await fs.promises.readFile("abc.txt", "utf-8");
//    console.log(data);
//    throw "error"; 
//    // return "victory";
// }

// // console.log( abc() ); // abc() fn is a promise , promise pending => Promise { <pending> }
// // let temp = abc(); 
// // console.log(temp); // promise pending => Promise { <pending> }

// abc().then(function(data){
//     console.log(data); // victory 
// }).catch(function(err){
//      console.log(err); // error
//  })


// SAME WORK OF ABOVE QUESTION USING PROMISES

// const fs = require("fs");
// function abc(){
//     return new Promise(function(res, rej) {
//         fs.promises.readFile("abc.txt", "utf-8").then(function(data){
//             console.log(data);
//             rej("error"); // NEW PROMISE KO REJECT KIA HAI tho catch fire hoga
//         });
//     });
// };

// abc().then(function(data){
//     console.log(data); 
// }).catch(function(err){
//     console.log(err); // error
// })



// ------------------------------------------------------
// anync function abc(){

// }

// same hai yaa dono

// function abc(){
//     return new Promise(function(res, rej){

//     });
// } 

//=======-----------------------------------------------------

// // next  Ques
// const fs = require("fs");
// async function abc() {
//     await fs.promises.writeFile("abc.txt", "hello");
//     let data = await fs.promises.readFile("1.txt", "utf-8");
//     console.log(data);
//     return "how are you";
// }

// async function main(){
//     let data = await abc();
//     console.log(data);
// }
// main();


// // CONVERTED TO PROMISES


// const fs = require("fs");
// function abc(){
//     return new Promise(function(res, rej){
//         fs.promises.writeFile("abc.txt", "hello").then(function(data){
//             fs.promises.readFile("1.txt", "utf-8").then(function(data){
//                 console.log(data);
//                 res("how are your");
//             });
//         });
//     });
// };

// function main(){
//     return new Promise(function(res,rej){
//         abc().then(function(data){
//             console.log(data);
//         });
//     });
// };
// main();


// -------------------------------------------------------------

// const fs = require("fs");
// TWO PROMISES OF READ FILE => 
// let p1 = fs.promises.readFile("abc.txt", "utf-8");
// let p2 = fs.promises.readFile("12.txt", "utf-8");

// let combinedPromise = Promise.all([p1, p2]);

// combinedPromise.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// });



// proof of the files run parallely => 
const fs = require("fs");
let p1 = fs.promises.readFile("abc.txt", "utf-8").then(function(data){
    console.log("p1 completed");
    return data;
});
let p2 = fs.promises.readFile("1.txt", "utf-8").then(function(data){
    console.log("p2 completed");
    return data;
});

let combinedPromise = Promise.all([p1, p2]);

combinedPromise.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});


// node intro.js
