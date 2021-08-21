
// abc store address of function 
let abc = function (){

}


const fs = require("fs");

// TO READ IN THE FILE
let data = fs.readFileSync("abc.txt", "utf-8");
console.log(data);

let data1 = fs.readFileSync("package-lock.json", "utf-8");
console.log(data1);

// TO WRITE IN THE FILE
fs.writeFileSync("def.txt", "I am very Fine");










