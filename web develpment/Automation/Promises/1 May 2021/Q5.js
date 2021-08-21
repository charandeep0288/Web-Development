// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data); // success

//     return job(true);
// })

// .then(function(data) {
//     if (data !== 'victory') // checks data type also ===
//     {
//         throw 'Defeat';
//     }

//     return job(true);
// })

// .then(function(data) {
//     console.log(data);
// })

// .catch(function(error) {
//     console.log(error); // Defeat

//     return job(false);
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error); // error

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data); // Error caught

//     // console.log(new Error('test').message ); // test
//     // agar throw kar raha honga tho .catch ho raha hai
//     return new Error('test'); // return means .then mai jai gaa
// })

// .then(function(data) {
//     console.log('Success:', data.message); // Success:test
// })

// .catch(function(data) {
//     console.log('Error:', data.message); 
// });

// // OUTPUT =>

// // success
// // Defeat
// // error
// // Error caught
// // Success: test

// // har .then & .catch promise return karta hai
// // har .then ka baad .then
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('victory');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

let data = promise

.then(function(data) {
    console.log(data); 

    return job(true);
})

.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';
    }

    return job(true);
})

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.log(error); 

    return job(false);
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error); 

    return 'Error caught';
})

.then(function(data) {
    console.log(data); 

    // console.log(typeof(new Error('test'))); // object 
    // console.log(new Error('test').message ); // test
    // agar throw kar raha honga tho .catch ho raha hai
    return new Error('test'); // return means .then mai jai gaa
})

.then(function(data) {
    console.log('Success:', data.message); 
    return "Hello"; // 
})

.catch(function(data) {
    console.log('Error:', data.message);  
});
/* output =>
victory
victory
undefined
victory
Success: test
*/


// console.log( promise ); // promise pending

data.then(function(abc){
    console.log(abc); // last .then ki value data name ka variable mai store hoga aur uss data variable pai .then laga ka uss value to print kar lai
});

// OUTPUT =>








function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data); // success

    return job(true);
})

.then(function(data) {
    if (data !== 'victory') 
    {
        throw 'Defeat';
    }

    return job(true);
})

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.log(error); // Defeat

    return job(false); 
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error); // error

    return 'Error caught';
})

.then(function(data) {
    console.log(data); // Error caught

    return new Error('test'); // 
})

.then(function(data) {
    console.log('Success:', data.message); // Success:test
})

.catch(function(data) {
    console.log('Error:', data.message); 
});
