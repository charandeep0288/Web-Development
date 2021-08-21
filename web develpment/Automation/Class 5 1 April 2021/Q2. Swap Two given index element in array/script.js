function swapTwoGivenIndexsOfAnArray(arr, idx1, idx2)
{
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    
    return arr;
}

console.log(swapTwoGivenIndexsOfAnArray(['a', 0, 1, 2, 3, 4, 'b'], 0, 5));
/*

[
  4, 0,   1,   2,
  3, 'a', 'b'
]

*/

// node script.js

