// npm install selenium-webdriver
// npm install chromedriver

// each fn in selenium return promise
const wd = require('selenium-webdriver');
const cd = require('chromedriver');
const { Driver } = require('selenium-webdriver/chrome');
const By = wd.By;
const until = wd.until;

// new means 
let browser = new wd.Builder()
           .forBrowser('chrome')
           .build();
 
    // browser.get("https://www.youtube.com/");
    
    browser.get("https://www.cricbuzz.com/live-cricket-scores/33773").then(function(){
        return browser.findElements(By.className("cb-nav-tab"));
    }).then(function(data){
        return data[1].click();
    }).then(function(){
        // console.log( browser.findElements(wd.Bycss("")) ); // promise pending
        return browser.findElements(wd.By.css(""));
    }).then(function(tables){
        // console.log(tables.length);
        let promises = [];
        for( let i = 0 ; i < 8 ; i += 2 )
        {
            promises.push( tables[i].findElements(wd.By.css("")) );
        }
        return Promise.all(promises);
    }).then(function(data){
        let promises = [];
        for( let i = 0 ; i < data.length ; i++ )
        {
            for( let j = 0 ; j < data[i].length ; j++)
            {
                promises.push( data[i][j].findElements( wd.By.css("div") ) );
            }
        }
        return Promise.all(promises);
    }).then(function(data){
        for( let i = 0 ; i < data.length ; i++ )
        {
            if( data[i].length == 7)
            {
                data[i][0].getText().then(function(playerName){
                    console.log(playerName);
                });                
            }
        }
    });


// node script.js    