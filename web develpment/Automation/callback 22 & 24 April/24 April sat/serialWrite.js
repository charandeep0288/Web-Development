//Q1. Serial Write in Multiple files
const fs = require("fs");

let fileName = 0;

// ik file koo write karka aa raha hai aur baki kaa kam callback fn(writeFile) mai kara gai
// FAITH
function writefile(err) // 
{
    if(!err && fileName < 8 )
    {

        fileName++;
        let numberOfLines = Math.floor(Math.random() * 101); // generate random from 1 to 100
        let arr = [];
        for( let i = 0 ; i < numberOfLines ; i++ )
        {
            arr.push(Math.floor(Math.random() * 101));
        }
        // join array to string
        let data = arr.join("\n"); // return string

        // let data = "";
        // for( let i = 0 ; i < numberOfLines ; i++ )
        // {
        //     if( i == numberOfLines - 1) // because we donot want to add "\n" in string at the last of string
        //     {
        //         data += Math.floor(Math.random() * 101);
        //     }
        //     else
        //     {
        //         data += Math.floor(Math.random() * 101) + "\n";
        //     }
        // }
        fs.writeFile(fileName + ".txt", data,writefile); // callback apna app laga gi call aur error mai undefined hoga
    }
}
// undefined means no error when writing file (ham jab call laga raha hai tab koi error nahi hai)
writefile(undefined); // function call => hamna lagai hai


// node serialWrite.js