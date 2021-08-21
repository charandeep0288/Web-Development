let a = 1;

// promise (W1) work kar raha hai number even hai yaa odd uska baad w2 work callback mai hoga
let promise1 = new Promise(function(resolve, reject)
{
    if( a % 2 == 0 )
       resolve("yes! number is even");

    else  
       reject("oh! number is odd");   
});

// console.log(promise1); // When number is odd => Promise { <rejected> 'oh! number is odd' }
// console.log(promise1); // when number is even => Promise { 'yes! number is even' }

// callback(W2)
// call back jitni marji bar chala sakta hai
// CALLBACK ISS BAR HAMARA HAATHO MAI HAI

// this complete fn is a callback
promise1.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});

// // kuch kam kar lia fir callback chala lia

// promise1.then(function(data){
//     console.log(data);
// });

// // kuch kam kar lia fir callback chala lia aur jitni marji bar callback laga sakta hai
// //  ISS CONCEPT KA USE KARKA ( CALLBACK HELL ) VALI CHIZ NAHI HOGI ABB

// promise1.then(function(data){
//     console.log(data);
//     console.log("hii");
// });

// // kuch kam kar lia fir callback chala lia

// // callback mai => .then mia kuch aur kam kar sakta hai har bar 
// promise1.then(function(data){
//     console.log("hello");
// });

// // .then mai fir diiferent kam kar raha hai 
// promise1.then(function(data){
//     console.log("hello1");
// });


// node intro.js