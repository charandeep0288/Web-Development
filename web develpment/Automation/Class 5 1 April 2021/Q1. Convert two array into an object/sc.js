// ARRAY MUST BE OF SAME SIZE TO MERGE 2 ARRAYS

function mergeTwoArrayIntoObject(arr1, arr2) {

    // let arr1 = [0, 1, 2, 3];
    // let arr2 = [];

    if (arr1.length != arr2.length || arr1.length == 0 || arr2.length == 0) {
        return "Not possible";
    }

    else
    {
        let obj = {};
        for (let i = 0; i < arr1.length; i++) {
            obj[arr1[i]] = arr2[i];

        }
        return obj;
    }
}

// stdout is used to take inputs
console.log(mergeTwoArrayIntoObject([0, 1, 2, 3, 4 ], ['a' ,'b' , 'c', 'd', 'e' ] ));
// { '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e' } OUTPUT


// node sc.js
