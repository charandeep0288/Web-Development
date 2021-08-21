// no Return type, no datatype for argument in function
// No Datatype concept in Javascript 
function abc()
{
    console.log("Hello World");
}
abc();
console.log(typeof abc); // object

// Ques 1.   Concatinate Array(having Strings in it) all Elements 
let arr1 = ["Red", "Green", "White"];
let str = "";
for( let i = 0 ; i < arr1.length ; i++)
{
    str =str + arr1[i] +" ";
}
console.log("Array elemets as a string = ", str); //  Red Green White
console.log(typeof str); // string

console.log(typeof arr); // object

// Ques 2. (2D array) Print Sum ofAll elements in 2D Array

let arr2 = [[1,2,3], [4,5,6,7,8,9],[0, 10.35]];
let sum = 0;
for(let i = 0 ; i < arr2.length ; i++)
{
    for(let j = 0 ; j < arr2[i].length ; j++)
    {
        sum += arr2[i][j];
    }
}
console.log("Sum of the Array = ", sum); // 55.35


//Ques 3. print Maximum frequency of a number in an array
//Code
let arr3 = [1, 2, 3, 2, 4, 4, 5, 6, 5, 6, 4];
let max = 0;
let ele = 0;
for(let i = 0 ; i < arr3.length ; i++)
{
    let count = 1; // variable have come one time at this time
    for(let j = i+1 ; j < arr3.length ; j++ )
    {
        if(arr3[i] == arr3[j])
        {
            count++;
        }
    }
    if(count > max)
    {
        max = count;
        ele = arr3[i];
    } 
}
console.log("Element with Maximum Frequency in the Array = ", ele);            


// Ques 4. Nested Array given (2D array) Flatten that array

// Input => arr4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output => [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
//Code
let arr4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let resarr = [];
let x = 0;
for(let i = 0 ; i < arr4.length ; i++)
{
    for(let j = 0 ; j < arr4[i].length ; j++)
    {
        // resarr[x] = arr4[i][j];
        // x++;
        resarr.push(arr4[i][j]);
    }
}
console.log("Flattened Array = ", resarr);
/* Output =>
 [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/

// Ques 5. Add 2 at each element in an array
//code
//Using Map Method Concept
let arr5 = [1,2,3,4,5,6];
function addTwo(d, i)
{
    return d+2;
}
arr5 = arr5.map(addTwo);
console.log("Added 2 to Each element of array(Using Map Method ) = ", arr5); // [ 3, 4, 5, 6, 7, 8 ]

// using For loop
let arr5_1 = [1,2,3,4,5,6];
for(let i = 0 ; i < arr5.length ; i++)
{
    arr5_1[i] += 2;
}
console.log("Added 2 to Each element of array = ", arr5_1); // [ 3, 4, 5, 6, 7, 8 ]


// Ques 6. Delete all even elements from an array
//code
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];
let resarr6 = [];
for(let i = 0 ; i < arr6.length ; i++)
{
    if(arr6[i]%2 != 0)
    {
        resarr6.push(arr6[i]);
    }
}
console.log("\n Array with only odd element (deleted odd elements from the array) = ", resarr6); //[ 1, 3, 5, 7, 9, 15 ]

// Using Filter Method
let arr6_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 24];
function removeEven(data, index) {
    return (data%2 == 0);
}

// create new ans named array variable to put data in it
let ans = arr6_1.filter(removeEven);
console.log("\nArray with only odd element (deleted odd elements from the array)(Using filter Method) = ", ans); // [ 2, 4, 6, 8, 10, 24 ]




// node theory_class2_21_march_2021.js