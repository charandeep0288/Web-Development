// https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results

const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");

let finalData = [];

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results", scoreCard);


function scoreCard(err, response, html){
    if(!err)
    {
        // fs.writeFileSync("EachPlayerRecord.html", html);

        let $ = cheerio.load(html);

        let allMatchScoreCardButton = $("a[data-hover='Scorecard']");
        // console.log(allMatchScoreCardButton.length);
        let allTeamsName = $(".match-info-link-FIXTURES .name");
        // console.log(Team1.length);

        let i, p = 0, q = 1;
        for( i = 0 ; i< allMatchScoreCardButton.length ; i++ )
        {
            let EachMatchLink = $(allMatchScoreCardButton[i]).attr("href");
            // console.log(EachMatchScoreCardButton);

            let firstTeamName = $(allTeamsName[p]).text();
            let SecondTeamName = $(allTeamsName[q]).text();
            p +=2;
            q += 2;
            // console.log(TeamName);
        
            let fullEachMatchLink = "https://www.espncricinfo.com" + EachMatchLink;
            // console.log(fullEachMatchLink);

            let obj = {

                Match : `${i+1} Match ${firstTeamName} VS ${SecondTeamName} `,
                "ScoreCard Link" : fullEachMatchLink
            };
            let team1Name = `Team ${firstTeamName} Players`;
            let team2Name = `Team ${SecondTeamName} Players`; 

            obj[team1Name]   = [ { "Batsmen" : [] }, { "Bolwers" : [] } ];
            obj[team2Name]   = [ { "Batsmen" : [] }, { "Bolwers" : [] } ];
                
            finalData.push(obj);

            request(fullEachMatchLink, tableOfPlayers.bind(this, i, team1Name, team2Name));
        }
        if( i == 60)
        {
            fs.writeFileSync("AllMatchesof2020.json", JSON.stringify(finalData));
        }
    }
}

function tableOfPlayers(finalDataIdx,team1Name, team2Name, err, response, html){
    if(!err)
    {
        // fs.writeFileSync("EachPlayerRecord.html", html);

        let $ = cheerio.load(html);

        // let allBatsmenDataRows = $(".table.batsman tbody tr");
        // // console.log(allBatsmenDataRows.length);

        let tableBatsman = $(".table.batsman");
        // console.log(tableBatsman.length); // 2
        for( let i = 0 ; i < tableBatsman.length ; i++ )
        {
            let allBatsmenDataRows = $(tableBatsman[i]).find("tbody tr");
            // console.log(allBatsmenDataRows.length);

            for( let j = 0 ; j < allBatsmenDataRows.length - 1 ; j += 2 )
            {
                let allBatsmenDataColumns = $(allBatsmenDataRows[j]).find("td");
                // console.log(allBatsmenDataColoums.length);
    
                let eachBatsmenName = $(allBatsmenDataColumns[0]).find(".batsman-cell.text-truncate .small").text();
                // console.log(eachBatsmenName);

                let eachBatsmenRun = $(allBatsmenDataRows[j]).find(".font-weight-bold").text() ;
                // console.log(eachBatsmenRun);

                let eachBatsmenBallsPlayed = parseInt( $(allBatsmenDataColumns[3]).text() );
                // console.log(eachBatsmenBallsPlayed);

                let eachBatsmen4Runs = parseInt( $(allBatsmenDataColumns[5]).text() );
                // console.log(eachBatsmen4Runs);

                let eachBatsmen6Runs = parseInt( $(allBatsmenDataColumns[6]).text() );
                // console.log(eachBatsmen6Runs);

                let eachBatsmenStrikeRate = parseFloat( $(allBatsmenDataColumns[7]).text() );
                // console.log(eachBatsmenStrikeRate);

                if( i == 0 )
                {
                    finalData[finalDataIdx][team1Name][0]["Batsmen"].push({
                        "Name " : eachBatsmenName,
                        "Runs " : eachBatsmenRun,
                        "No. of Balls Played " : eachBatsmenBallsPlayed,
                        "4s " : eachBatsmen4Runs,
                        "6s" : eachBatsmen6Runs,
                        "Strike Rate " : eachBatsmenStrikeRate
                    });
                }
                else
                {
                    finalData[finalDataIdx][team2Name][0]["Batsmen"].push({
                        "Name " : eachBatsmenName,
                        "Runs " : eachBatsmenRun,
                        "No. of Balls Played " : eachBatsmenBallsPlayed,
                        "4s " : eachBatsmen4Runs,
                        "6s" : eachBatsmen6Runs,
                        "Strike Rate " : eachBatsmenStrikeRate
                    });
                }
            }
        }
        fs.writeFileSync("AllMatchesof2020.json", JSON.stringify(finalData));

        let tableBowler = $(".table.bowler");
        // console.log(tableBowler.length);

        for( let i = 0 ; i < tableBowler.length ; i++ )
        {
            let allBowlerDataRows = $(tableBowler[i]).find("tbody tr");
            // console.log(allBowlerDataRows.length);

            for( let j = 0 ; j < allBowlerDataRows.length ; j++ )
            {
                let allBowlerDataColumns = $(allBowlerDataRows[j]).find("td");
                // console.log(allBowlerDataColumns.length);

                let eachBowlerName = $(allBowlerDataColumns[0]).find(".small").text();
                // console.log(eachBowlerName);

                let eachBowlerOverTaken = $(allBowlerDataColumns[1]).text();
                // console.log(eachBowlerOverTaken);

                let eachBowlerM = $(allBowlerDataColumns[2]).text();
                // console.log(eachBowlerM);

                let eachBowlerRun = $(allBowlerDataColumns[3]).text();
                // console.log(eachBowlerRun);

                let eachBowlerWickets = $(allBowlerDataColumns[4]).text();
                // console.log(eachBowlerWickets);

                let eachBowlerECON = $(allBowlerDataColumns[5]).text();
                //console.log(eachBowlerECON);

                let eachBowler0s = $(allBowlerDataColumns[6]).text();
                //console.log(eachBowler0s);

                let eachBowler4s = $(allBowlerDataColumns[7]).text();
                //console.log(eachBowler4s);

                let eachBowler6s = $(allBowlerDataColumns[8]).text();
                //console.log(eachBowler6s);

                let eachBowlerWD = $(allBowlerDataColumns[9]).text();
                // console.log(eachBowlerWD);

                let eachBowlerNB = $(allBowlerDataColumns[10]).text();
                // console.log(eachBowlerNB);

                if( i == 0 )
                {
                    finalData[finalDataIdx][team1Name][1]["Bolwers"].push({
                        "Name " : eachBowlerName,
                        "Overs " : eachBowlerOverTaken,
                        "M " : eachBowlerM,
                        "Runs " : eachBowlerRun,
                        "Wickets " : eachBowlerWickets,
                        "ECON " : eachBowlerECON,
                        "0s " : eachBowler0s,
                        "4s " : eachBowler4s,
                        "6s " : eachBowler6s,
                        "Wide " : eachBowlerWD,
                        "No Ball " : eachBowlerNB,
                    });
                }
                else
                {
                    finalData[finalDataIdx][team2Name][1]["Bolwers"].push({
                        "Name " : eachBowlerName,
                        "Overs " : eachBowlerOverTaken,
                        "M " : eachBowlerM,
                        "Runs " : eachBowlerRun,
                        "Wickets " : eachBowlerWickets,
                        "ECON " : eachBowlerECON,
                        "0s " : eachBowler0s,
                        "4s " : eachBowler4s,
                        "6s " : eachBowler6s,
                        "Wide " : eachBowlerWD,
                        "No Ball " : eachBowlerNB,
                    });
                }

            }

        }
    }
}


// node cricinfoBatsmenRuns.js