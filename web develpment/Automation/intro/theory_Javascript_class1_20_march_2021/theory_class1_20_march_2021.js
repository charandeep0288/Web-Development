// to check node js version
// node -v 

// Javascript is a loosely typed Language
// Javascript is a Case Sensitive Language
// Javascript require V8 engine (which is in Node js and chrome) or any other engine to run on.

let a = 10;
console.log(a);

let b = 10.53;
console.log(b);

let c = "Charandeep Singh";
console.log(c);

let d = 'A';
console.log(d);

let e = true;
console.log(e);

let f = "r";
console.log(f);

let g = 'Harpreet Singh';
console.log(g);

let h = false;
console.log(h);

// These are used in Javascript
// backtick ``    there is a difference in backtick & single coats and double coats 
// single coates ''
// double coates ""

for(let i = 0 ; i < 10 ; i++)
{
    console.log(i);  // print on console
}


for(let i = 1 ; i <= 10 ; i++)
{
    if(i%2 == 0 )
      console.log(i + " Even \n"); // concatination 
     
     else
       console.log(i , ' Odd \n'); 
}

//While loop 
let p = 0;
while( p < 10 )
{
    console.log(p);
    p++;
}


// Array
// we just started array size 10;
let arr3 = new Array(10); // size => 10, but can be increased or decreased
console.log("Array Length (arr3) = " + arr3.length);

let arr = [];
let arr1 = [1, 2, 3, 4,"", 'Charan', true, 10.43, `Preet`, "harpreet" ];  // a single array can store different types of values 

console.log("Print Array(arr1) = ", arr1); // output => Print Array(arr1) =  [ 1, 2, 3, 4, '', 'Charan', true, 10.43, 'Preet', 'harpreet' ]

console.log("arr1 5th element = " + arr1[5]);

// peek => to print last element of the array
console.log("Peek element = ", arr1[arr1.length-1]); //  Peek element =  harpreet


let arr2 = []; // size =>0, but can be increased or decreased

console.log("Array (arr2) = ", arr2);  // []

// To add element in the end of the array
arr2.push("bansal");
console.log("element pushed in Array (arr2) = ", arr2); // element pushed in Array (arr2) =  [ 'bansal' ]

// To remove last element form the array
arr2.pop();
console.log("Array (arr2) after removing last element = ",  arr2);

// Put element at a particular position in array
// at that position in array value gets replaced 
arr[4] = "3234";


const arr4 = new Array(10); // size => 10 , but can be increased or decreased using const
console.log(arr4.length); // output => 10
arr4[100] = "hello";

console.log("Array (arr4) = ", arr4); // Array (arr4) =  [ <100 empty items>, 'hello' ]

console.log("Array Length = " + arr4.length); // output => 101

console.log(arr4[13]); // array element have not been initialized by any value yet
// soo, undefined is printed


let x = 10;
x =20;

// const b = 10;
// b = 20; // error   cannot do reassigning of variable

const ar = [];
ar[1] = "fdsfsd";
// ar[] = "karan"; // error  cannot do reassigning of array
console.log(a);



// To run the file 
// node theory_class1_20_march_2021.js