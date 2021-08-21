let abc = 123;

function abcd() // function
{
   return 1234;    
}
let a = 1; 
let b = 2;
let c = 3;
let str1 = "charan"; // Double coats
let str2 = 'preet'; // Single coats

let str3 = `pepcoding ${abc}`;  //back tick

let str4 = `pepcoding ${abcd()}`;  //back tick  // concatenation 

let str5 = `pepcoding ${a + b + c}`;  //back tick  // concatenation 


let str7 = "charan" + "deep " + "Singh"; // concatenation 

console.log(str1, str2, str3, str4); // charan preet pepcoding 123 pepcoding 1234

console.log(str3[11]); // 2
console.log(str1[3]); // r

console.log(str5); // pepcoding 6
console.log(str7); // charandeep Singh


// TRAVERSEAL ON STRING
for( let i = 0 ; i < str1.length ; i++ )
{
    console.log(str1[i]);
}

// TRAVERSEAL ON STRING
// Adding string 
let str6 = "";
for( let i = 0 ; i < str1.length ; i++ )
{
    str6 += str1[i] + " ";
}
console.log(str6); // c h a r a n 

// //Q1. DECIMAL TO BINARY NUMBER CONVERSION
// // number given in string

// function decimalToBinary(num)
// {
//     let ans = "";

//     while(num != 0 )
//     {
//         let rem = num % 2;
//         ans = rem + ans;
//         num =parseInt(num/ 2);
//         //num = Math.floor(num/2);
//     }
//     console.log(ans);
// }

// decimalToBinary(parseInt("10"));


// //Q2. BINARY TO DECIMAL CONVERSION

// function binaryToDecimal(binary)
// {
//     // let ans = 0;
//     // let i = 0;
//     // while(num != 0)
//     // {
//     //     let rem = binary % 10;
//     //     ans +=(rem * Math.pow(2, i)); 
//     //       binary /= 10;
//     // }
//     let pow = 0;
//     let ans = 0;
//     for( let i = binary.length - 1 ; i >= 0 ; i++)
//     {
//         let binaryDigit = parseInt(binary[i]);
//         ans += (Math.pow(2,pow) * binaryDigit);
//         pow++;
//     }
//     console.log(ans);
// }

// // binaryToDecimal(parseInt("1010"));
// binaryToDecimal("1010");



let str8 = "Charandeep Singh";
// SUBSTRING OF A STRING
console.log(str8.substring(3,13));  // randeep Si
console.log(str8.charAt(2)); // a

// CONVERT EACH LETTER OF THE STRING TO UPPER CASE 
console.log(str8.toUpperCase());  // CHARANDEEP SINGH

// //Q3 TO UPPER CASE FIRST LETTER OF EACH WORD IN A STRING
// function firstLetterUpperCaseOfEachWord(str10){
//     let str9 = str10;
//     let ans = str9[0].toUpperCase();
//     for(let i = 1 ; i < str9.length ; i++ )
//     {
//         if(str9[i] == " ")
//         {
//             ans = ans +" "+str9[i+1].toUpperCase();
//         }
//         else if(str9[i-1] != " " )
//         {
//             ans = ans + str9[i];
//         }
//     }
//     console.log(ans);
// }

// firstLetterUpperCaseOfEachWord("charan deep singh");

// //Q4. Reverse each word of the String
// //INPUT =>   My Name is Charan
// // OUTPUT => yM emaN si narahC

// function reverseEachWordOfString(str11)
// {
//     int 
// }

// reverseEachWordOfString("My Name is Charan");



// // Q5. To check if String is a Palindrome or not 
// //(return true if Palindrome otherwise return false )
// function checkPalimdrome(str13)
// {
//     let ans = 
// }

// checkPalimdrome("MoM");


// STRING TO ARRAY
let string = "I Love pepcoding";

// split the string by the character pecificied in coates( " " )
// splited string is stored in the form of ARRAY
console.log(string.split(" ")); // [ 'I', 'Love', 'pepcoding' ]
console.log(string.split("i")); // [ 'I Love pepcod', 'ng' ]

console.log(string.split(""));  
/*
[
  'I', ' ', 'L', 'o',
  'v', 'e', ' ', 'p',
  'e', 'p', 'c', 'o',
  'd', 'i', 'n', 'g'
]
*/

// ARRAY TO STRING

// join is used to join array which was create usinf string
console.log(string.split("i").join("i"));  // I Love pepcoding
console.log(string.split(" ").join("$"));  // I$Love$pepcoding

let arr = ["hello", "how", "are", "you"];
console.log(arr.join(" "));     // hello how are you


//  A to Z => 65 to 90 ASCII Code
//  a to z => 97 to 122 ASCII Code

// Print ASCII code of a character
console.log(string.charCodeAt("i")); // I => 73

