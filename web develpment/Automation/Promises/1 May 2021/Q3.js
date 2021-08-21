// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-quiz-time

function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();

promise

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
    // return undefined; // return is like promise
    // iss return kaa bad joo bhi statemmet aya gii woo nullify hoo jai gii
})

.catch(function(data) {
    console.log(data);
    console.log('Error 1');
    return "A";
    return "B"; // nullify statement -> kabi work hi nahi kara gii, ik fuction mai return karna ke baad uska nicha ki sari statements nihi chalti & within that function scope
    // return undefined; // kar dia issna tho uska next .then chal jai gaa
    throw "error!!!!!!!!!!!!";
})
// error handle kar lia hamna .catch() mai tho uska aga ka code chal jana chahia(.then() iss .catch() ke baad)
.then(function() {
    console.log('Success 4');
}).catch(function(err){
    console.log(err);
});


// node Q3.js




