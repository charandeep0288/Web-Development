// Q2 read all files serially which were created serially in last ques (in Q1) 
// read file serially and print all files sum 

const fs = require("fs");

// 1.txt read hoo chuki hai, lakin sum nahi hua abi,..... aur baki ham abhi fn mai kara gai
let sum = 0;
let fileName = 1; 
// NOT RECUSION
// RECUSION IS SUBSET OF CALLBACK
// ONE LEVEL OF NESTED CALL BACK
function readfile(err, data)
{
    if(!err)
    {
        // escape character => "\n"
        let arrData = data.split("\n");
        
        for( let i = 0 ; i  < arrData.length ; i++ )
        {
            sum += parseInt(arrData[i]); // convert string to integrger 
        }
        fileName++;
        if(fileName > 8 )
        {
            console.log(sum);
            return;
        }
        fs.readFile(fileName + ".txt", "utf-8", readfile);

    }

}
fs.readFile(fileName + ".txt", "utf-8", readfile);

// 20:08
// CALL BACK HELL => unable to read or understand callback then it is
// to sovle this problem => promises, async await,  

// node serialRead.js