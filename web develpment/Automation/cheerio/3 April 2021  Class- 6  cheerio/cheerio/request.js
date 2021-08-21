// npm init -y (create package.json file)
// npm i request
// npm install cheerio

// const request = require("request");
// const cheerio = require("cheerio");
// const fs = require("fs");

// request('https://www.google.com/', callback);

// function callback(err, response, html)
// {
//     if(!err)
//     {
//         // fs.writeFileSync("google.html", html );
//         let $ = cheerio.load(html); // wrapping of html code in cheerio

//         let feeelinglucky = $("#tsuid1"); // looking for this selector
//         // console.log(feeelinglucky); 
//         console.log(feeelinglucky.attr("value")); // print attribute content of this value attribute of tag in HTML
//     }
// }



// const request = require("request");
// const cheerio = require("cheerio");
// const fs = require("fs");

// request('https://www.pepcoding.com/', callback);

// function callback(err, res, html)
// {
//     if(!err)
//     {
//         fs.writeFileSync("pepcoding.html", html );
//         let $ = cheerio.load(html);
//         let pepdata = $(".bolder.lp-banner-heading");
//         console.log(pepdata.text());
//     }
// }





// // LAST COMMENT OF CRICINFO WEBSITE
// const request = require("request");
// const cheerio = require("cheerio");
// const fs = require("fs");

// request('https://www.espncricinfo.com/series/women-s-senior-one-day-trophy-2020-21-1255263/jharkhand-women-vs-railways-india-women-final-1255735/ball-by-ball-commentary', callback);

// function callback(err, res, html)
// {
//     if(!err)
//     {
//         // fs.writeFileSync("cricInfoLastCommentary.html", html );
//         let $ = cheerio.load(html);
//         let comments = $(".col-14.col-md-15.col-lg-14 span"); // Array of all comments 
//         //  last comment of html is put in the array(comments) first 
//         // console.log(comments);
        
//         // and we have to wrap array with cheerio each time
//         let lastComment = $(comments[0]);
        
//         // print all coments at one time
//         console.log(comments.text());

//         // print all commments one by one
//         for( let i = 0 ; i < comments.length ; i++ )
//         {
//             console.log(lastComment[i].text());
//         }
//         // print only last comment only
//         //console.log(lastComment[0].text());
//     }
// }


// // TO FIND THE MAXIMUM WICKET TAKER BOWLER PLAYER NAME  
// const request = require("request");
// const cheerio = require("cheerio");
// const fs = require("fs");

// request('https://www.espncricinfo.com/series/women-s-senior-one-day-trophy-2020-21-1255263/jharkhand-women-vs-railways-india-women-final-1255735/full-scorecard', callback);

// function callback(err, res, html)
// {
//     if(!err)
//     {
//         let maxWickets = 0;
//         let maxWicketPlayer;

//         fs.writeFileSync("wickettaker.html", html );
//         let $ = cheerio.load(html);
//         let rows = $(".table.bowler tbody tr");
        
//         for( let i =0 ; i< rows.length ; i++ )
//         {
//             let coloums = $(rows[i]).find("td");
//             //console.log(coloums.length);

//             let wickets = parseInt( $(coloums[4]).text() );

//             if( wickets > maxWickets )
//             {
//                 maxWickets = wickets;

//                 maxWicketPlayer = $(coloums[0]).text();
//             }

//         }
//         console.log(maxWicketPlayer);
//     }
// }



// MEN OF THE MATCH
// const request = require("request");
// const cheerio = require("cheerio");
// const fs = require("fs");

// request('https://www.espncricinfo.com/series/the-marsh-cup-2020-21-1244113/victoria-vs-south-australia-14th-match-1244137/full-scorecard', callback);

// function callback(err, response, html)
// {
//     if(!err)
//     {
//          // fs.writeFileSync("playerOfTheMatch.html", html );
//         let $ = cheerio.load(html); // wrapping of html code in cheerio

//         let playerOfTheMatch = $(".best-player-name a"); // looking for this selector
//         // console.log(playerOfTheMatch); 
//         console.log(playerOfTheMatch.text()); // print attribute content of this value attribute of tag in HTML
//     }
// }
// // OUTPUT => Jonathan Merlo


// node request.js