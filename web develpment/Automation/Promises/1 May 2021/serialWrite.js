const fs = require("fs");

function main(){

    // first file write file hoo gai hai uska promise store hoo jai gaa fileWrittenPromise mai
    let fileWrittenPromise = writefile("1.txt"); // writefile fn first file ko read kar lai gaa
    for( let i = 2 ; i <= 8 ; i++ )
    {
        // fileWrittenPromise variable => file ka written ka promise daa gaa
        fileWrittenPromise = fileWrittenPromise.then(function(data){
            console.log(i-1 + " file written ");// proof write file serially hoo rahi hai
            return writefile( i + ".txt"); // next file ka 
        });
    }
    fileWrittenPromise.then(function(){
        console.log("Last file written");
    })
};

// create data & write file this fn work 
// faith => first file ko read kar lia hoga, next filename aa gia
function writefile(fileName){

    let numberOfLines = Math.floor(Math.random() * 101); // generate random from 1 to 100
    let arr = [];
    for( let i = 0 ; i < numberOfLines ; i++ )
    {
        arr.push(Math.floor(Math.random() * 101));
    }
    // join array to string
    let data = arr.join("\n"); // return string

    return fs.promises.writeFile(fileName, data); // promise
}

main();


// node serialWrite.js