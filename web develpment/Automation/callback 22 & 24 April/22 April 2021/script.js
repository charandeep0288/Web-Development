// Q1  
// let a = true;
// setInterval(() => {
//     a = false;
// }, 1000); // 10 sec

// while(a)
// {
//     console.log("hello");  // run INFINITE TIMES
// }

// Q2
// setInterval(() => {
//     if(a)
//       console.log("hello");  // print hello 10 times
// }, 1000);
// settimeout(() => {
//     a = false;
// }, 10500);

// Q3 
setInterval(() => {
    if(a)
      console.log("hello"); // print hello 9 times
}, 1000);
settimeout(() => {
    a = false;
}, 10010);

// setInterval ko ik variable mai store kar lia aur
let inter =  setInterval(() => {
    if(a)
      console.log("hello");
}, 1000);

settimeout(() => {
   clearInterval(inter); // to stop setInterval
}, 10090); 