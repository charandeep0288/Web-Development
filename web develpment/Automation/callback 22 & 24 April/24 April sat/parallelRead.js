// 20:22
// joo bhi code hum apna hatho se likhta hai woo Main Stack mai chala gaa
// async and hamna nahi lika code tho woo web api mai chala gaa

// readFile() async and not written by us then this will run on web API
// callback fn hamna apna hatho se likha hai tho woo Main Stack mai chala gaa

// 20:23
// 8 bullets fire at same time BUT we donot know which will hit target first

const fs = require("fs");

let totalFileRead = 0;
let sum = 0;
function callback(filename, err, data)
{
    if(!err)
    {
        let arrData = data.split("\n");
        for(let i = 0 ; i < arrData.length ; i++ )
        {
            sum += parseInt(arrData[i]);
        }
        totalFileRead += 1;
        console.log(filename + " has been read");

        if(totalFileRead == 8 )
        {
            console.log(sum);
        }
    }
}
// 8 web API same time par chal rahi thi, jonsi file phala read hoo gai uska callback phala chala gaa

for( let i = 1 ; i <= 8 ; i++ )
{
    fs.readFile(i + ".txt", "utf-8", callback.bind(this, i + ".txt"));
}
// .bind() mai joo bhi bhej raha hai woo callback fn mai first argument mai ata hai fn kaa
// this => represent global of this file and this is a pointer

// node parallelRead