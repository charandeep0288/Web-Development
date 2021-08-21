// key : value
// key and value can be of any datatype

let obj = {
    "hello" : 1,
    2 : "hello2",
    "hello3" : "three"
}

obj["five"] = 5; // Adding new key in the object whose value is 5

console.log(obj["hello"]); // 1

console.log(obj[2]); // hello2
 
obj[2] = "two"; // override the value for the key in object
console.log(obj[2]); // two 

// Print Whole object
console.log(obj); // { '2': 'two', hello: 1, hello3: 'three', five: 5 }

// TO PRINT ALL KEYS OF THE OBJECT
console.log( Object.keys(obj)); // [ '2', 'hello', 'hello3', 'five' ]

// TO PRINT ALL THE VALUES OF THE OBJECT
console.log(Object.values(obj)); // [ 'two', 1, 'three', 5 ]




