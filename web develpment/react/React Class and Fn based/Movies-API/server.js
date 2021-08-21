// node sever.js

// sever mai kuch bhi change karta hia tho server koo dubara run karna padhrta hai
let express = require("express"); 

let data = require("./data.json");
// console.log(data);


// creating server instanstance (ek naya sever bnade & e sirf create krti use chalu nhi krti)
let server = express();


// let a = { Key1: 1, key2: 2};

// --------------------------
// http://localhost:3000/movies ( /movies -> is a end point )
server.get("/movies", function(req, res){
    res.json(data);
    // res.json(a);
});


server.get("/genre", function(req, res){
    // 
    let allGenreObjects = data.map(function(el){
        return el.genre;
    });

    // console.log(allGenreObjects);

    let uniqueGenreObjects = [];

    for(let i = 0 ; i < allGenreObjects.length ; i++){
        let genreId = allGenreObjects[i]["_id"];

        let index = uniqueGenreObjects.findIndex(function(el){
            return el._id == genreId;
        });

        if(index == -1){
            uniqueGenreObjects.push(allGenreObjects[i]);
        }
    }

    // console.log(uniqueGenreObjects);

    res.json(uniqueGenreObjects); // sending this response
    
    // res.send("genre data from server");
});


// -------------------------
// server pai get request ayi tho, server naa response bheja using send() fn
// server.get("/", function(req, res){
//     res.send("hi"); // browser apna aab hi HTML bana lai gaa jaab yaa respnose mila gaa server se

// });

// -------------------------
// ik bar mia ik hi response milta hai
// server.get("/abc", function(req, res){ // phala vala chala gaa .get() because of top to down execution
//     res.send("Kuch Bhi 1");
// });

// server.get("/abc", function(req, res){ 
//     res.send("Kuch Bhi 2");
// });


// server.get("/xyz", function(req, res){
//     res.send("Kuch Bhi 3"); // sirf ik hi response send kar sakta hai, ik get() request se
//     res.send("<h1> HI </h1>"); // not a good practice
// });





// ye line sever ko shuru krdeti hai
// ek port pr -> like 3000 (in this case)
server.listen(4000);


// localhost:4000 => http://localhost:4000/ ( humra server ka url)
