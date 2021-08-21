#!/usr/bin/env node

// ENVIORMENT IN WHICH WE WANT TO RUN THIS FILE (JAVA , JS, PYTHON etc)  


// // node package manager 
// // npm i fs

// // Good Practice => now we cannot change the value of fs variable
// const fs = require("fs");

// let processData = process.argv;
// //console.log(processData); // processData array => store address or path of each line written in javascript
// /*
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\ckaun\\AppData\\Roaming\\npm\\node_modules\\wcat\\script.js',
//   'num',
//   'abc.txt',
//   'def.txt'
// ]
// */


// if (processData[2] == 'a') // Appending new data in the file without deleting any data from file
// {
//     let previousData = fs.readFileSync(processData[3], "utf-8");
//     fs.writeFileSync(processData[3], previousData + "\n" + processData[4]);
// }
// else if (processData[2] == 'w')  // WRITE FILE
// {
//     fs.writeFileSync(processData[3], processData[4]);
// }
// else //READ FILES
// {
//     let data = "";
//     let numbering = 1;
//     let iUpdated = false;
//     for (let i = 2; i < processData.length; i++)
//     {
//         if (processData.includes("ne")) // non empty =>to remove empty lines form the file
//         {
//             if (!iUpdated) {
//                 i++;
//                 iUpdated = true;
//             }
//             let tempData = fs.readFileSync(processData[i], "utf-8");
//             let lines = tempData.split("\n");
//             // let lines = tempData.split("\r\n"); //FOR WINDOWS
//             // \r => regular expression

//             if (tempData.includes("\r")) {
//                 lines = tempData.split("\r\n");
//             }

//             let finalData = "";
//             for (let j = 0; j < lines.length; j++) {
//                 if (lines[j] != "") {
//                     finalData += lines[j] + "\n";
//                 }
//             }
//             data += finalData;
//         }

//         else if (processData.includes("ns")) // next space =>to remove spaces form the file
//         {
//             if (!iUpdated) {
//                 i++;
//                 iUpdated = true;
//             }
//             let tempData = fs.readFileSync(processData[i], "utf-8");
//             // return array
//             let arrData = tempData.split(" "); // split file on the basis of space 
//             // console.log(arrData);
//             let finalData = arrData.join("");  

//             data += finalData;
//         }

//         else if( processData.includes("num") ) // number each line of the file
//         {
//             if (!iUpdated) {
//                 i++;
//                 iUpdated = true;
//             }
//             let tempData1 = fs.readFileSync(processData[i], "utf-8");
//             let linesOfFile = tempData1.split("\n");
//             // console.log(linesOfFile);
//             // [ 'NEW', 'a b c ', 'd e f', '', '', 'SHOES' ] 
//             // return array of the elements of the file on the bases of nextline ( \n )
            
//             let finalData = "";
//             for( let j = 0 ; j < linesOfFile.length ; j++ )
//             {
//                 finalData += numbering++ + " " + linesOfFile[j] + "\n";
//             }

//             data += finalData;
//             //data += numbering +"\n" + fs.readFileSync(processData[i], "utf-8");
//         }
//         else // READ FILE WITHOUT ANY MODIFICATIONS
//         {
//             data += "\n" + fs.readFileSync(processData[i], "utf-8");

//         }
//     }
//     console.log(data)
// }

// node script.js

// wcat ne abc.txt                              => to read file and to remove empty lines form abc.txt file and DISPLAY content an it is
// wcat ne abc.txt                              => to read multiple files and to remove empty lines form abc.txt file and def.txt file and DISPLAY content an it is

// wcat w abc.txt "My name is Charandeep Singh" => to WRITE content in the file

// wcat a abc.txt "Good Night"                  => to Append data in the file without deleting the existing data 

// wcat abc.txt                                 => to read file and display content an it is
// wcat abc.txt def.txt                         => to read multiple files and display content an it is


 // PROJECT DONE BY ME AGAIN

// const fs = require("fs");

// let processData = process.argv;

// let data = "";

// if( processData[2] == 'a')
// {
//     let previousData = fs.readFileSync(processData[3], 'utf-8');
//     fs.writeFileSync(processData[3], previousData + '\n' + processData[4]);

// }
// else if( processData.includes('w') )
// {
//     fs.writeFileSync(processData[3], processData[4]);

// }
// else
// {
//     let iUpdated = false;
//     let numbering = 1;
//     for( let i = 2 ; i < processData.length ; i++ )
//     {
//         if(processData.includes('ne'))
//         {
//             if(!iUpdated)
//             {
//                 i++;
//                 iUpdated = true;
//             }
//             let tempData = fs.readFileSync(processData[i], 'utf-8');
//             // console.log(tempData);
//             let lines = tempData.split('\n');

//             if( tempData.includes('\r'))  // lines.includes('\r')
//             {
//                  lines = tempData.split('\r\n');

//             }
//             // console.log(lines);

//             let finalData = "";
//             for( let j = 0 ; j < lines.length ; j++ )
//             {
//                 if(lines[j] != "")
//                 {
//                     finalData += lines[j] + '\n' ;
//                 }   
//             }
//             data = finalData;
//         }
//         else if( processData[2] == 'num')
//         {
//             if(!iUpdated)
//             {
//                 i++;
//                 iUpdated = true;
//             }
//             let tempData = fs.readFileSync(processData[i], 'utf-8');
//             let lines = tempData.split('\n');

//             if(tempData.includes("\r"))
//             {
//                 lines = tempData.split('\r\n');
//             }
//             // console.log(lines);

//             let finalData = '';
//             for( let j = 0 ; j < lines.length ; j++ )
//             {
//                 finalData += numbering++ + " " + lines[j] + '\n';
//             }
//             //console.log(finalData);

//             data += finalData;
            
//         }
//         else if( processData.includes('ns'))
//         {
//             if(!iUpdated)
//             {
//                 i++;
//                 iUpdated = true;
//             }
//             let tempData = fs.readFileSync(processData[i], 'utf-8');
//             let arrData = tempData.split(' ');
            
        
//             let finalData = arrData.join('');
//             data += finalData;

//         }
//         else
//         {
//             data += fs.readFileSync(processData[i], 'utf-8') + '\n';
//         }

//     }
//     console.log(data);
// }