const puppeteer = require("puppeteer");

let id ="pomoket649@684hh.com";
let password = "Yourpassword123"; 

let challenges = ["challenge1","challenge2","challenge3","challenge4"];

let moderators = [
    "bansalbhavesh47",
    "bansalbhavesh50",
    "nocidi6371", 
    "ralariv999", 
    "yasekin473", 
    "sibaje3329", 
    "pamahex943"
];

async function hackerrank(){

    let browser = await puppeteer.launch({
        headless : false,
        defaultViewport : false
    });

    let allTabs = await browser.pages();

    let tab1 = allTabs[0];

    await tab1.goto("https://www.hackerrank.com/auth/login");

    await tab1.type("#input-1",id);
    await tab1.type("#input-2", password);
    await tab1.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");

    await tab1.waitForNavigation({ waitUntil: "networkidle2" });
    await tab1.click(".dropdown-handle.nav_link.toggle-wrap");
    await tab1.click("a[data-analytics='NavBarProfileDropDownAdministration']");

    await tab1.waitForSelector(".nav-tabs.nav.admin-tabbed-nav li", { visible: true });
    let lists = await tab1.$$(".nav-tabs.nav.admin-tabbed-nav li");
    // console.log(lists.length);
    await lists[1].click(".nav-tabs.nav.admin-tabbed-nav li");

    await tab1.waitForSelector(".btn.btn-green.backbone.pull-right", { visible : true } );
    let createChallengeButton = await tab1.$(".btn.btn-green.backbone.pull-right");

    let createChallengeUrl = await tab1.evaluate(function (ele) {
        return ele.getAttribute("href");
    }, createChallengeButton);
    // console.log(createChallengeUrl);
    for( let i = 0 ; i < challenges.length ; i++ )
    {
        await createChallenge("https://www.hackerrank.com" + createChallengeUrl, challenges[i], tab1 );
    }
}

async function createChallenge( url, challenge, tab )
{
    await tab.goto(url);

    await tab.waitForSelector("#name");
    await tab.type("#name", challenge);
    await tab.type("#preview", challenge);

    await tab.waitForSelector(".CodeMirror textarea");
    let textArea = await tab.$$(".CodeMirror textarea");
    for( let i = 0 ; i < textArea.length ; i++ )
    {
        await textArea[i].type(challenge);
    }

    await tab.type("#tags_tag", challenge);
    await tab.keyboard.press("Enter");
    await tab.click(".save-challenge.btn.btn-green");

    await tab.waitForSelector("li[data-tab='moderators']", {visible : true});
    await tab.click("li[data-tab='moderators']");

    await tab.waitForSelector("#confirmBtn");
    await tab.click("#confirmBtn");

    await tab.waitForSelector("li[data-tab='moderators']", {visible : true});
    await tab.click("li[data-tab='moderators']");

    await tab.waitForSelector("#moderator", { visible : true});
    for(let i = 0 ; i < moderators.length ; i++ )
    {
        await tab.type("#moderator", moderators[i]);
        await tab.keyboard.press("Enter");
    }

    await tab.click(".save-challenge.btn.btn-green");
}
hackerrank();

// node script.js