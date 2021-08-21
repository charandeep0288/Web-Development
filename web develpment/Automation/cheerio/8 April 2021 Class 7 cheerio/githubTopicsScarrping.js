
const cheerio = require("cheerio");
const fs = require("fs");
const request = require("request");

let finalData;

request("https://github.com/topics", callback);

function callback(err, response, html) {
    fs.writeFileSync("githubTopics.html", html);

    let $ = cheerio.load(html);

    let topics = $(".no-underline.d-flex.flex-column.flex-justify-center");

    // console.log(topics.length);
    for (let i = 0; i < topics.length; i++) {
        let topicUrl = $(topics[i]).attr("href");
        // console.log("https://github.com" + topicUrl);
        request("https://github.com" + topicUrl, getTopic8Url);
    }
}

function getTopic8Url(err, response, html) {
    if (!err) {
        // fs.writeFileSync("UrlInTopics.html", html);
        let $ = cheerio.load(html);
        let repoLinks = $("a.text-bold");


        for (let i = 0; i < repoLinks.length && i < 8; i++) {
            // console.log( "https://github.com" + $(repoLinks[i]).attr("href") );
            let EachRepoLinks = "https://github.com" + $(repoLinks[i]).attr("href");

            let EachRepoTopic = $(repoLinks[i]).text();

            // console.log(EachRepoLinks);

            console.log(EachRepoTopic);
            // finalData.push({
            //     "Topic" : EachRepoTopic,
            //     "Repo Link" : EachRepoLinks 
            // });

            request(EachRepoLinks + "/issues", IssuesOfRepos);
        }
    }
}

function IssuesOfRepos(err, response, html) {

    if (!err)
    {
        let $ = cheerio.load(html);
        let issueLink1 = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");

        // console.log(issueLink1.length);
        for (let i = 1; i <= 8 && i < issueLink1.length; i++)
        {
            let IssueLink = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
            let EachIssueLink ="https://github.com" + $(IssueLink[i]).attr("href");
            console.log(EachIssueLink);

        }

    }
}
// node githubTopicsScarrping.js