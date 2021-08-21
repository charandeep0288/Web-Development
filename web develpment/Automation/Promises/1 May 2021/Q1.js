// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-time-to-pratice-with-promises


// Let's do some practice with a simple exercice. You must modify the code below based on the following rules:

// The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
// The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data


function job() {
    let promise1 = new Promise(function(res, rej){
        setTimeout(function(){
            res("hello world"); // fn call
        }, 2000);
    });
    return promise1;
}

module.exports = job;

// node Q1.js