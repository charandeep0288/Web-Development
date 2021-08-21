
// //Global function
// function print(val){ 
//     val += 5; // work 2
//     console.log(val);
// }

// function add (n1, n2, print)
// {
//     let sum = n1+n2;  // work 1
//     print(sum);
// }

// add(2, 3, print);



// // order will matter if function has been put in the variable
// let sum1 = function add (n1, n2, print)
// {
//     let sum = n1+n2;  // work 1
//     print(sum);
// }

// const fs = require("fs");

// // syncronus fuction ( CALL BACK FUNCTION )
// function print(err, data){
//     if(!err)
//     {
//         console.log(data);
//     }
// }

// // asyncronus function => which is put on the webAPI by MainStack
// // And then, fs.readFile is send to back to MainStack after work is done on that file
// fs.readFile("Q1.txt", "utf-8", print);



// READ 10 FILES 
const fs = require("fs");
let count = 0;
// asynchronously
// CALLBACK FUNCTION
function callback(err, data) {

    if (!err) 
    {
        //console.log(data); 
        count++;       
        if (count <= 10) 
        {
            console.log(data);
            fs.readFile("Q" + (count + 1) + ".txt", "utf-8", callback);
        }
    }

    // if one of the file doesnot exist eg :- Q3.txt
    else
    {
        if (count < 10) 
        {
            fs.readFile("Q" + (count + 1) + ".txt", "utf-8", callback);
            count++;
        }   
    }
}

fs.readFile("Q1.txt", "utf-8", callback);



// // RUN 10 FILES asynchronously
// // PARALLELY READ ALL 10 FILES
// const fs = require("fs");
// let count = 0;
// function read10FilesOf(err, data )
// {
//     if(!err)
//     {
//         console.log(data);
//     }
// }
// for( let i= 1 ; i <= 10 ; i++ )
// {
//     fs.readFile("Q" + i + ".txt", "utf-8", read10FilesOf);
//     count++;
// }


// node callback.js