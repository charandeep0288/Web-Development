// Q1 (free code camp)
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/explore-differences-between-the-var-and-let-keywords

// Q2 (freecode camp)
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array


let a = [1, 2, 3];

// a.map(function(element, index, completeArr)
a.map(function (element, index, completeArr) {
    console.log(element);
    console.log(index);
    console.log(completeArr);
});



// ----------------------------------------
let obj = {
    someArr: [3, 7, 12],
    f: function () {
        this.someArr.map(function (e) {
            console.log(2 * e);
        });
    }
}
obj.f();



// ----------------------------------------
let obj2 = {
    someArr: [3, 7, 12],
    f: function () {
        function f2() {
            this.someArr.map(function (e) {
                console.log(2 * e);
            });
        }
        f2();
    }
}
obj.f();

// Q3
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-arrow-functions-with-parameters

// Q4
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array

// Q5
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem


// ------------------------------------------
// normal function (keyword fn; i can give it a name)
function f1() {
    console.log("Hi");
}


// arrow fn (no keyword only symbols; i cannot give it name so i've to store it in a variable)
let f2 = () => {
    console.log("HI");
}

// --------------------------------------------
function f3() {
    return 2;
}

let f4 = () => 2;  // same as upper fn



// ---------------------------------------------
function f5(a, b) {
    return 2;
}
f5(); // fn call (iss case mai a & b mai value undefined jai gii)
f5(2, 3); //// fn call

let f6 = (a, b) => 2;  // same as upper fn



// ----------------------------------------------
function f7(a) {
    return 2;
};

let f8 = (a) => 2; // same as upper fn


// ================================================

// ----------------------------------------
let obj2 = {
    someArr: [3, 7, 12],
    f: function () {
        let f2 = () => {
            this.someArr.map(function (e) {
                console.log(2 * e);
            });
        }
        f2();
    }
}

obj.f();


// --------------------------------------
let f3 = function(){
    let f4 = () =>{
        console.log(this); // arrow fn ka koi reference nahi hota tho woo apna parent (in this case f3) kaa this ko reffer karta hai 
    }
    f4();
}

f3(); // window



// ==================================================
// -------------------------------------------
function f(){};  // function expression -> fn with no name (9:35)

// IIFE ->  (fn ka name ka bina call kia hai fn koo directly)
(function (){})(); 

(() => {
    console.log("THIS IS AN IIFE USING ARROW FUNCTION");
})();


// ==================================================
// this concept was used in eS5 (when eS6 was not introduced)
function vehicle(model){

    this.model = model;
    this.speed = speed;
    this.speedMeter = function (){
        console.log(this.speed);
    }
};

let mercedes = new vehicle("s class", 24);

console.log(mercedes);

mercedes.speed();


// =======================================================