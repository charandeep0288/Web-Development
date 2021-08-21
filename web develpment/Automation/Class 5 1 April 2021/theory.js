// {

//     // block scope
//     let i = 0;
// }
// console.log(i); // error


// {

//     // function scope
//     var i = 0;
// }
// console.log(i); // 0


// {
//     // const also have block scope
//     const i = 0;
//     console.log(i); // 0
// }
// // console.log(i); // error


// function abc ()
// {
//     let i = 0; // let is for the SECURITY
//     console.log(i); // 0
// }
// abc();
// console.log(i); // error


// function abc ()
// {
//     var i = 0;
//     console.log(i); // 0
// }
// abc();
// console.log(i); // error 


// {
//     const i =0 ;
//     {
//         const i = 10;
//         console.log(i); // 10

//     }
//     console.log(i); // 0
// }

// {
//     let i =0 ;
//     {
//         let i = 10;
//         console.log(i); // 10

//     }
//     console.log(i); // 0
// }


{
    var i =0 ;
    {
        var i = 10000;
        console.log(i); // 10000

    }
    console.log(i); // 10000
}


// // NOT REDECLARABLE (let) 
// let i = 0;
// let i = 10; // error

// // RASSIGNABLE (let)
// let i = 0;
// i = 10;
// console.log(i);  // 10


// // REDECLARABLE (var) 
// var i = 0;
// var i = 50; 
// console.log(i); // 50

// // RASSIGNABLE (var)
// var i = 0;
// i = 20; 
// console.log(i); // 20


// // NOT REDECLARABLE (const) 
// const i = 0;
// const i = 50; // error 

// // NOT RASSIGNABLE (const)
// const i = 0;
// i = 20; // error


// node theory.js