// Ques 5. Add 2 at each element in an array
//code
//Using Map Method Concept
let arr5 = [1,2,3,4,5, ,6];
function addTwo(data, index)
{
    return data + 2;
}
arr5 = arr5.map(addTwo);
console.log("Added 2 to Each element of array(Using Map Method ) = ", arr5); // [ 3, 4, 5, 6, 7, 8 ]

// using For loop
let arr5_1 = [1,2,3,4,5,6];
for(let i = 0 ; i < arr5.length ; i++)
{
    arr5_1[i] += 2;
}
console.log("Added 2 to Each element of array = ", arr5_1); // [ 3, 4, 5,<1 empty item>, 6, 7, 8 ]



// node Q5.Add2ToEachElementInArray.js

