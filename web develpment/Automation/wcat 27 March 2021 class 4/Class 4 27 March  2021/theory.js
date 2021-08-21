// abc variable stores the address of the function in it
let abc = function (){

}
abc();
console.log(abc); // [Function: abc]
// all the functions are put on the top of the file at the compile time



// node package manager 
// npm i fs

const fs = require("fs");


let data1 = fs.readFileSync('a.txt',''); // read file in buffer format
console.log(data1);  // <Buffer 66 64 63 65 72 72 65 77>     NOT UNDERSTANDABLE so we use utf-8


// TO READ IN THE FILE
let data2 = fs.readFileSync("a.txt", "utf-8");
console.log(data2); // My Name is Charandeep Singh

// fs.readFileSync => synchronous function, run on main stack
// fs.readFile => Asynchronous function, doesnot run on main stack
// DOUBLE SLASH is used in WINDOWS for giving path of the file
let data3 = fs.readFileSync("D:\\pep 14 march batch\\Web Development\\wcat 27 March 2021 class 4\\package.json", "utf-8");
console.log(data3);
/* OUTPUT =>
{
  "name": "wcat",
  "version": "1.0.0",
  "main": "script.js",
  "dependencies": {
    "fs": "^0.0.1-security"
  },
  "bin": {
    "wcat": "script.js"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
*/

// TO WRITE IN THE FILE
fs.writeFileSync("abc.html", "I am very Fine");  // if file doesnot exist then create that file and write


// TO RUN A FILE WHICH IS BEING SEND AS AN ARGUMENT IN CMD
let filename = process.argv[2];
let data4 = fs.readFileSync(filename, "utf-8");
console.log(data4);  // My Name is Charandeep Singh




// RUN MULTIPLE FILES AT SAME TIME 
let filename1 = process.argv[2];
let filename2 = process.argv[3];

let data5 = fs.readFileSync(filename1, "utf-8");
let data6 = fs.readFileSync(filename2, "utf-8");
console.log(data5 +"\n"+ data6);
/*
My Name is Charandeep Singh
I am very Fine

*/



// RUN MULTIPLE FILES AT SAME TIME 
let processData = process.argv;
let data7 = "";

for(let i = 2 ; i < processData.length ; i++)
{
    data7 += "\n" + fs.readFileSync(processData[i], "utf-8");
}

console.log(data7);


console.log(__dirname);  // display current working directory
// D:\pep 14 march batch\Web Development\wcat 27 March 2021 class 4\Class 4 27 March  2021


// node theory.js 