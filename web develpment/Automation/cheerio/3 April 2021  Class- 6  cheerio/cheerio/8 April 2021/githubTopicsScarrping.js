
const cheerio = require("cheerio");
const fs = require("fs");
const request = require("request");

let finalData = [];

request("https://github.com/topics", callback);

function callback(err, response, html) {
    fs.writeFileSync("githubTopics.html", html);

    let $ = cheerio.load(html);

    let topics = $(".no-underline.d-flex.flex-column.flex-justify-center");

    // console.log(topics.length);
    for (let i = 0; i < topics.length; i++) {
        let topicUrl = $(topics[i]).attr("href");
        // console.log("https://github.com" + topicUrl);
        let projectName = $($(topics[i]).find("p")[0]).text().split(" ")[8].split("\n")[0];
        let projectUrl = "https://github.com" + topicUrl;
        // console.log(projectUrl);

        finalData.push({
            "Project Name ": projectName,
            "Project URL ": projectUrl,
            "gitRepos" : []
        });

        // fs.writeFileSync("GithubData.json", JSON.stringify(finalData));

        request(projectUrl, get8Repos.bind(this,i));
    }
    // console.log(finalData);
}

let count1 = 0;
let totalRepoCount = 0;
function get8Repos(finalDataIdx,err, response, html) {
    if (!err) {
        count1++;
        // fs.writeFileSync("UrlInTopics.html", html);
        let $ = cheerio.load(html);
        let repoLinks = $("a.text-bold");
        // console.log(repoLinks);
        totalRepoCount += (repoLinks.length > 8 ? 8 : repoLinks.length);


        for (let i = 0; i < repoLinks.length && i < 8; i++)
        {
            // console.log( "https://github.com" + $(repoLinks[i]).attr("href") );
            let EachRepoLinks = "https://github.com" + $(repoLinks[i]).attr("href");

            let EachRepoTopic = $(repoLinks[i]).text().split(" ")[12].split("\n")[0];

            finalData[finalDataIdx]["gitRepos"].push({
                "Repo Name " : EachRepoTopic,
                "Repo Link " : EachRepoLinks,
                "issues" : []
            });

            // console.log(EachRepoLinks);
            // console.log(EachRepoTopic);

            // fs.writeFileSync("GithubData.json", JSON.stringify(finalData));

            request(EachRepoLinks + "/issues", getIssuesOfRepos.bind(this, finalDataIdx, i));
        }
        // if(count1 == 3)
        // {
        //     // console.log(finalData);
        //     fs.writeFileSync("GithubData.json", JSON.stringify(finalData));

        // }
        // console.log(finalData);
        // console.log(count);
    }
}

let count = 0;
function getIssuesOfRepos(finalDataIdx, repoIdx, err, response, html) {

    if (!err) {
        count++;
        let $ = cheerio.load(html);
        let issueLink1 = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        
        // console.log(issueLink1.length);
        for (let i = 1; i <= 8 && i < issueLink1.length; i++)
        {
            let IssueLinks = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
            let EachIssueLink = "https://github.com" + $(IssueLinks[i]).attr("href");

            let EachIssueTopic = $(IssueLinks[i]).text();

            finalData[finalDataIdx]["gitRepos"][repoIdx]["issues"].push({
                "Isssue Name " : EachIssueTopic,
                "Issue URL" : EachIssueLink
            });

            // console.log( " Issue No. : " + (i+1));
            // console.log(EachIssueLink);
            // console.log(EachIssueTopic);
        }
        if(count == totalRepoCount) // 3 Topics or projects & 8 issues => 24
        {
            console.log(finalData);
            fs.writeFileSync("GithubData.json", JSON.stringify(finalData));
        }

    }
}

// node githubTopicsScarrping.js