let puppeteer = require("puppeteer");
let fs = require("fs");

let YoutubeVediourl = "https://www.youtube.com/watch?v=ioWkx6WRH2I";
let urlOfyt1 = "https://yt1s.com/en5";

async function youtubeVedioDownload () {

    // starts browser
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized", "--disable-notifications",],
        slowMo : 5
    });

    let numberofPages = await browser.pages();
    let tab = numberofPages[0];

    // goto page
    await tab.goto(urlOfyt1);
    
   
    await tab.waitForSelector("#s_input", {visible : true});
    await tab.type("#s_input",YoutubeVediourl, { delay: 50 });

    await tab.click("button[type='button']");

    await tab.waitForSelector("button[id='btn-action']", {visible : true});
    await tab.click("button[id='btn-action']");

    await tab.waitForSelector(".form-control.mesg-convert.success", {visible : true});
    await tab.click(".form-control.mesg-convert.success");

}

youtubeVedioDownload();

// node youtubeDownloadVideo.js
