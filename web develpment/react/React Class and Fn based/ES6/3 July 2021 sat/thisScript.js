// this -> is a ref to an obj (and kis object ka reference that depend on the condtions defined below)

// // ====================================================

// // In BROWSER (without strict)

// // -------------------------------------------
// // 1) when we are using 'this' globally we get window object
// console.log(this); // window obj 


// // -------------------------------------------
// // 2) when we are using 'this' inside a function we get window object 
// function f() {
//     console.log(this); // window
// }

// f();

// // // =============================================
// // // changing refence of 'this' object 
// // // this = {}; // not a better approach to do 
// // // =============================================


// // -------------------------------------------
// // 3) ik object mia -> direct fn use kara gai tho -> this huma wohi wala object daa gaa
// let obj = {
//     prop1: 1, // property1
//     // direct fn (because stored as key value pair)
//     f: function () {
//         console.log(this); // obj (obj woo wala jisma yaa fn padra hai)
//     }
// }

// obj.f();


// // -------------------------------------------
// // 4) ik object mia -> indirect fn use kara gai tho -> this huma window object daa gaa
// let obj2 = {
//     prop1: 1,
//     f: function () {
//         // f2() -> indirect fn (because not stored as key value pair in object)
//         function f2() {
//             console.log(this); // window obj
//         }
//         f2();
//     }
// }

// obj2.f();


// // =============================================
// // --eS5 -> very lineant ( galat chiz likh dii lakin fir bhi error nahi dati)

// a = 2; // (without any keyword let, var or const variable define kar dia, and koi error nahi aya gii) 
// console.log(a); // 2

// // in javascript
// function f20(a, a){ // doo argument of fn ka name same hai, but no error in eS5
//     console.log(a); // 10 // 'a' variable latest value of 'a' se replace hoga, i.e,-> 10
// }
// f20(2, 10);

// // ----------------------------------------------------
// // In, eS6 we have "use strict" which can identify error
// "use strict" // (jana "use strict" likha gai uska nicha vali line se  kam karna shuru karta hai yaa in js file)

// // error -> a is not defined (when we use strict keyword above this line of code)
// a = 2; // (without any keyword let, var or const) "use strict" karna se yaa mana gaa ki yaa upar defined hoga kahi (using let, var or const) & and mai yaha use kar raha hai (siraf 'a' varible ki value change kar raha hai) so, error aa gai
// console.log(a);

// // error -> Duplicate parameter name not allowed in this context
// function f(a, a){ // gives error when we use "use strict" -> means strict mode mai doo argument of fn ka name same nahi hoo sakta

// }


// // -------------------------------------------------
// // eg -> 
// "use strict" // (force to use proper keyword & syntax in code below this line)
// let a = 2;
// a = 3; // no error (we can do assiging of different value to a varable using strict)
// console.log(a);

// // eg ->
// // ik fn mai hi strict use karna hai 
// function f1(){
//     // siraf iss fn ka lia strict mode mai raha gaa bahar non strict hi raha gaa
//     "use strict"; // siraf ik fn mai hi use kia hai "use strict"
//     console.log(this); // undefined
// }
// f1(); // must call fn 
// // =============================================





// // =============================================

// // In BROWSER (using strict) 
// "use strict"

// // -------------------------------------------
// // 1) when we are using 'this' globally we get window object
// console.log(this); // print window object 


// // -------------------------------------------
// // 2) when we are using 'this' inside a function we get undefined 
// function f() {
//     console.log(this); // undefined
// }

// f();


// // -------------------------------------------
// // 3) ik object mia -> direct fn use kara gai tho -> this huma wohi wala object daa gaa
// let obj = {
//     prop: 1,
//     // dicrect fn (because stored as key value pair)
//     f: function () {
//         console.log(this); // obj hi mila gaa
//     }
// }

// obj.f();


// // -------------------------------------------
// // 4) ik object mia -> indirect fn use kara gai tho -> this huma undefined daa gaa
// let obj2 = {
//     prop: 1,
//     f: function () {
//         // f2() -> indirect fn (because not stored as key value pair)
//         function f2() {
//             console.log(this); // undefined
//         }
//         f2();
//     }
// }

// obj2.f();



// =============================================
// 