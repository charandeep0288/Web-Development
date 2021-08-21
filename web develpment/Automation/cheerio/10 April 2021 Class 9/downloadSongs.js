const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");

let finalData = [];
for( let i = 1 ; i <= 5 ; i++ )
{
    let url = "https://www.last.fm/music/+free-music-downloads/laptop?page=" + i;
    request(url, download100Songs);
}


function download100Songs(err, response, html){
    if(!err)
    {

        let $ = cheerio.load(html);

        let onePageAllSongsTotalRows = $(".chartlist-row.chartlist-row--with-artist");
        // console.log(onePageAllSongsTotalRows.length);

        for( let i = 0 ; i < onePageAllSongsTotalRows.length ; i++ )
        {
            let eachSongName = $(onePageAllSongsTotalRows[i]).find(".chartlist-name a").text();
            // console.log(eachSongName);

            let eachArtistName = $(onePageAllSongsTotalRows[i]).find(".chartlist-artist a").text();
            // console.log(eachArtistName);

            let eachSongDownloadLink = $(onePageAllSongsTotalRows[i]).find(".chartlist-download a").attr("href");
            // console.log(eachSongDownloadLink);

            finalData.push({
                "Artist Name" : eachArtistName,
                "Song Name" : eachSongName,
                "Downlaod Link" : eachSongDownloadLink
            });
        }
        fs.writeFileSync("100SongsData.json", JSON.stringify(finalData));
    }
}


// node downloadSongs.js