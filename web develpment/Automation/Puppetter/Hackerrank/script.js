// // npm i puppeteer

// //  setTimeout(function(){
// //      console.log("hello1");

// //  }, 1000);

// //  setTimeout(function(){
// //     console.log("hello1");
// // }, 2000);

// // setTimeout(function(){

// // }, 5000);

const puppeteer = require("puppeteer");

 // asyc is used because we want to use await in this fn

 const id = "pomoket649@684hh.com";
 const password = "Yourpassword123";

 async function main(){

    let browser = await puppeteer.launch({
        headless : false,
        defaultviewport : false // by default 600 * 600
    });

    let tabs = await browser.pages(); // gives array of the tabs of the chromium browser
    // console.log(tabs.length);
    
    let tab1 = tabs[0]; // first tab

    await tab1.goto("https://www.hackerrank.com/auth/login"); // to open an url on that tab

    await tab1.type("#input-1",id);
    await tab1.type("#input-2", password);
    await tab1.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");

    await tab1.waitForSelector("#base-card-1-link", {visible : true})// waiting for visibility of this selector
    await tab1.click("#base-card-1-link");
    
    // waiting for this selector to load on the screen
    await tab1.waitForSelector("a[data-attr1='warmup']", {visible : true});
    await tab1.click('a[data-attr1="warmup"]');

    await tab1.waitForSelector(".js-track-click.challenge-list-item", {visible : true});
    let problemsUrl = await tab1.$$(".js-track-click.challenge-list-item"); // $$ means iss selector se related jitna element hai sara ik array mai lya gaa
    // console.log(problemsUrl.length); // 4 no. of problems in this page

    let problemsUrlArray = [];
    let url;
    for( let i = 0 ; i < problemsUrl.length ; i++ )
    {
        // to get url of each problem
        url = await tab1.evaluate(function(ele){
            // let arr = [ele.getAttribute("href")];
            return ele.getAttribute("href");

        }, problemsUrl[i]);

        problemsUrlArray.push(url); // store all problems url in an array
        // console.log( "https://www.hackerrank.com/" + url);  
    }
    // console.log(problemsUrlArray);
    
    // await to run everything one by one
    for( let  i = 0 ; i < problemsUrlArray.length ; i++ )
    {
        await solveChallenge("https://www.hackerrank.com" + problemsUrlArray[i], tab1);
    }
    await browser.close(); // to close browser after all work is done
 }

 async function solveChallenge(url, tab){

    let problemUrl = url.replace("?", "/problem?");
    let editorialUrl = url.replace("?","/editorial?");
    // console.log(editorialUrl);

    await tab.goto(editorialUrl);

    let languages = await tab.$$(".hackdown-content h3"); 
    // console.log(languages.length);


    for(let i = 0 ; i < languages.length ; i++) 
    {
        let languageName = await tab.evaluate(function(ele){
            return ele.textContent; //  innnerText
        },languages[i]); // to get each language name or heading
        // console.log(languageName); // print each language name in which code is available on editorial

        if( languageName == "C++")
        {
            let codes = await tab.$$(".hackdown-content .highlight"); // array of codes in C++ language for each question or particular question
            
            let code = await tab.evaluate(function(ele){
                return ele.textContent;
            }, codes[i]);

            // console.log(code); // code of C++ lang stored in a variable named =>(code)
    
            await tab.goto(problemUrl);
         
            await tab.waitForSelector(".checkbox-input", {visible : true});
            await tab.click(".checkbox-input");
            // we are typing code in custom input
            // because in editor EXTRA CLOSING BRACKER IS COMING WHEN WE WRITE CODE DIRECTLY IN EDITOR  
            await tab.type("#input-1", code); 

            await tab.keyboard.down("Control"); // control ko press kara hua hai
            await tab.keyboard.press("A");
            await tab.keyboard.press("X");
            await tab.click(".monaco-scrollable-element.editor-scrollable.vs");
            await tab.keyboard.press("A");
            await tab.keyboard.press("V"); // 
            await tab.keyboard.up("Control"); // control ko release kar dia
            await tab.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");

            // wating for congratulations for code submit
            await tab.waitForSelector(".congrats-heading", { visible : true })
    
            // return => after complete submittion of one problem
            // taki next problem kaa lia kar kar saka 
            return;
        }
    }
 }
main();
// node script.js

// const puppy = require("puppeteer");
// const id = "folig44850@tlhao86.com";
// const password = "Random@1997";
// async function main() {
//     let browser = await puppy.launch({
//         headless: false,
//         defaultViewport: false
//     });
//     let tabs = await browser.pages();
//     let tab = tabs[0];
//     await tab.goto("https://www.hackerrank.com/auth/login");
//     await tab.type("#input-1",id);
//     await tab.type("#input-2",password);
//     await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
//     await tab.waitForSelector("#base-card-1-link", {visible: true});
//     await tab.click("#base-card-1-link");
//     await tab.waitForSelector('a[data-attr1="warmup"]', {visible: true});
//     await tab.click('a[data-attr1="warmup"]');
//     await tab.waitForSelector(".js-track-click.challenge-list-item", {visible: true})
//     let problems = await tab.$$(".js-track-click.challenge-list-item");
//     let problemUrls = [];
//     for(let i = 0; i < problems.length; i++) {
//         let url = await tab.evaluate(function(ele) {
//             return ele.getAttribute("href");
//         }, problems[i]);
//         problemUrls.push(url);
//     }

//     for(let i = 0; i < problemUrls.length; i++) {
//         await solveChallenge("https://www.hackerrank.com" + problemUrls[i],tab);
//     }
//     await browser.close();
// }

// async function solveChallenge(url,tab) {
//     let problemUrl = url.replace("?", "/problem?");
//     let editorialUrl = url.replace("?", "/editorial?");
//     await tab.goto(editorialUrl);
//     let languages = await tab.$$(".hackdown-content h3");
//     for(let i = 0; i < languages.length; i++) {
//         let languageName = await tab.evaluate(function(ele) {
//             return ele.innerText;
//         }, languages[i]);
//         if(languageName == "C++") {
//             let codes = await tab.$$(".hackdown-content .highlight");
//             let code = await tab.evaluate(function(ele) {
//                 return ele.innerText;
//             }, codes[i]);
//             await tab.goto(problemUrl);
//             await tab.waitForSelector(".checkbox-input", {visible: true});
//             await tab.click(".checkbox-input");
//             await tab.type("#input-1", code);
//             await tab.keyboard.down("Control");
//             await tab.keyboard.press("A");
//             await tab.keyboard.press("X");
//             await tab.click(".monaco-scrollable-element.editor-scrollable.vs");
//             await tab.keyboard.press("A");
//             await tab.keyboard.press("V");
//             await tab.keyboard.up("Control");
//             await tab.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
//             await tab.waitForSelector(".congrats-heading", {visible: true});
//             return;
//         }
//     }
// }
// main();