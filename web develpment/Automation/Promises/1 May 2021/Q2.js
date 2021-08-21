// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/more-pratice-with-promises


// Let's do a harder exercise. In this code, your function receives a parameter data. You must modify the code below based on the following rules:

// Your function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)


function job(data) {
    return new Promise(function( res, rej ){
         if( typeof(data) != "number") // isNaN(data)
        {
            setTimeout(function(){
                rej("error");
            });
        }
        else if(data % 2 != 0 )
        {
            setTimeout(function(){
                res("odd");
            }, 1000);
        }
        else if( data % 2 == 0 )
        {
            setTimeout(function(){
                rej("even");
            }, 2000);
        }
       
    } );
}

module.exports = job;