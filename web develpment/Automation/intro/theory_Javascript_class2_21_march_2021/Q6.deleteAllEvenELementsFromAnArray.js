
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

// create new ans named array to put data in it
let ans = arr6_1.filter(removeEven);
console.log("\nArray with only odd element (deleted odd elements from the array)(Using filter Method) = ", ans); // [ 2, 4, 6, 8, 10, 24 ]



// node Q6.deleteAllEvenELementsFromAnArray.js


