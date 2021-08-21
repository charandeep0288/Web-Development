//  // node spread.js


// // ----------------------------------------
// // SPREAD OPERATOR -> IN ARRAY
// // Ques.
// let a = [1,2];
// let b = [3, 4];

// let c = [a, b]; //  -> ???????
// let d = [...b, ...a]; // -> ??????

// console.log(a); // [ 1, 2 ]
// console.log(b); // [ 3, 4 ]
// console.log(c); // [ [ 1, 2 ], [ 3, 4 ] ]
// console.log(d); // [ 3, 4, 1, 2 ]


// // -----------------------------------------
// // SPREAD OPERATOR -> IN OBJECT
// let obj1 = {
//     Key1: 1,
//     key2: 2
// }




// let obj2 = {
//     Key3: 3,
//     key4: 4,
//     ...obj1, // (obj1 mai jao & uska sara key value laa kai yaha rakh doo) obj1 ka sara key value pair aya gai idar
// };

// console.log(obj2);  // { Key3: 3, key4: 4, Key1: 1, key2: 2 }

// // obj3 is nothing but obj2 (when we se output of obj2 -> all the key value pair of obj2 are same as obj3)
// let obj3 = {
//     Key3: 3,
//     key4: 4,
//     key1: 1,
//     key2: 2,
// }

// NOTE -> objects do shallow copy 
// NOTE -> ik object mai ik hi key value pair rahata hai(joo hum new key ko value dai gai uss se update hoo jai gii)
//eg -> 
// let o2 = {
//     key3: 3,
//     key2: 4,
//     key1: 1,
//     key2: 2, // key2 ki value 4 thi phala but abb value 2 se update hoo jai gii (ik new key value pair nahi banaga) 
// }
// console.log(o2);

// NOTE -> OBJECT PROPERTY -> ik object mai ik key ik hi bar exist kar sakti hai
// NOTE -> OBJECT PROPERTY -> (jab kisi object kaa pass same key hoti hai tho woo key ki value latest value se update kar data hai ) jab hum key value pair mai store karta hai, agar ik key value pair hai & ik aur key value pair hai jiska key ka same hai pichla vala se tho woo latest value of value se key ko update kar deti hai


// // ---------------------------------------------
// // slice(starting index, ending index) fn in ARRAY
// let a = [4, 5, 6, 7];

// // 
// console.log(a.slice(1,3)); // [5, 6]


// console.log(a.slice(2)) // [6, 7]


// // ----------------------------------------------
// // Ques. INPUT-> a = [4, 8, 7, 9, 12, 13];
// // task (1.1)  this output -> [4, 8, 7, 3, 9, 12, 13, 16] using for loop, 
// // task (1.2) this output -> [4, 8, 7, 3, 9, 12, 13, 16] using spread & slice

// let a = [4, 8, 7, 9, 12, 13]; // output -> [4, 8, 7, 3, 9, 12, 13, 16]
// let b = [];

// // task 1.1
// for( let i = 0 ; i < 3 ; i++ ){
//     b[i] = a[i];
// } 
// b[3] = 3;
// for(let i = 3 ; i < a.length ; i++ ){
//     b[i+1] = a[i];
// }
// console.log(a);
// console.log(b);

// // tasks 1.2
// let b1 = [...a.slice(0, 3), 3, ...a.slice(3)];
// console.log(b1);


// ==============================================
// DESTRUCTURING, IN ARRAY

// --------------------------------------

// let a = ["Ram", "Sham","Dhyan"];
// // destructuring hoo rahi hai
// // order mai nikal raha hai array mai se 
// let [x, y] = a; // x mai array 'a' ki pahali value aya gii & y mia "a" array ki second index vali value aya gii
// console.log(x); // Ram
// console.log(y); // Sham


// // jiss order mai likha hia usi order mai array se value pick kara gaa
// let [b, c, d, e] = a;  // b, c, d, e are new variable, joo destructuring kaa use karka "a" array mai se value nikal ka apna andar save kar raha hai
// console.log(a); // [ 'Ram', 'Sham', 'Dhyan' ]

// console.log(b); // Ram
// console.log(c); // Sham
// console.log(d); // Dhyan
// console.log(e); // undefined

// // --------------------------------------------------------
// let a = ["Ram", "Sham","Rahul", "Dhyan"];

// // jitna coma dalka kahali space chodra gai utni values ko skip kara gaa array mai se, then uska baad ki value uthya gaa
// let [g, , , h] = a; 

// console.log(g); // Ram
// console.log(h); // Dhyam


// // ==========================================
// // DESTRUCTURING -> IN OBJECTS 
// let a = {
//     x: "alpha",
//     y: "beta",
// };


// // NOTE -> object mai se agar destructure karka value nikalni hai, tho huma variable ka name same key vala name rakhna hoga

// // // NOTE -> array mai kisi bhi name ka variable create kar sakta tha, but IN OBJECT -> joo key ka name hia(in key value pair) usi name se varible define kar sakta hai, asa nahi kia tho undeifined aya gaa

// let {x} = a; // x -> new variable create hoga, jiss name ki key hai uss name ka variable banai gaa (restriction hai yaa), and x variable mai x key of object "a" ki value store hogi

// // // NOTE -> ik benefit bhi hai -> jasa array mai huma coma dai kaa space dani padrti thi woo nahi karna padra gaa yaha (direct key likh kaa uski value nikal sakta hai, coma space vala kam nahi karna padra gaa)

// let {y} = a; // direct key ka name likh ka uski value same key name ka varaible mai store kar dii

// console.log(a);
// console.log(x);
// console.log(y);

// let {z} = a;
// console.log(z); // undefined // because "z" name ki key "a" array mai exist nahi karti
// console.log(a.z); // undefined 


// ---------------------------------
let a = {
    x: {
        z: "gamma"
    },
    y: "beta",
};

// let {z} = a; // undefined -> because yaa "a" array mai direct keys(x, y are direct keys of "a" array in this case) mai jaa kai dunda gaa tho usa mili nahi tho undefined dai gaa
// console.log(z); // undefined -> because 

// THESE TWO CASES ARE SAME (nicha joo likha hai) 
// CASE-I
// let {x:{z}} = a; // z name ka variable create hoga (a object mai x object mai z key ke value nikali humna)  
// or
// CASE-II
let {z} = a.x; // z name ka variable hi create hoga (a.x -> a object mai x object mai -> directly z name ki key dunda gaa)

let {x} = a;
console.log(a);
console.log(x);
console.log(z); 

// -----------------------------
