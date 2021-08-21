// Problem 1
let arr = [1,2, 43, 435,435576,46,43];
function sevenBoom(arr)
{
    if( arr.length == 0 )
    {
        return "there is no 7 in the array";
    }
    for( let i = 0 ; i < arr.length ; i++ )
    {
        let num = arr[i];
        while( num != 0 )
        {
            let rem = num % 10;
            // console.log(rem);
            if(rem == 7)
            {
                return "Boom!"
            }
            num =parseInt( num / 10 );   
        }
    }
    return "there is no 7 in the array";
}
console.log( sevenBoom(arr) );


// problem 2
let ansArr = [];
let x = 0, y = 0;
function trackRobot( str )
{
    if( str.length == 0 )
    {
        return [0, 0];
    }
    let arr = str.split(", ");
    // console.log( arr.length );

    for( let i = 0 ; i < arr.length ; i++ )
    {
        // North
        if( i == 0 )
            y = arr[i]; 

        // East   
        else if( i == 1 )
            x = arr[i];     
        
        // South 
        else if( i == 2 )
            y -= arr[i];         

        // West   
        else if( i == 3 )
            x -= arr[i]; 
    }

    ansArr[0] = parseInt(x);
    ansArr[1] = parseInt(y);

    return ansArr;
}
console.log( trackRobot("") );
console.log( trackRobot("20, 30, 10") );


// problem 3
let count = 0;
function countTrue( arr )
{
    if( arr.length == 0 )
    {
        return 0;
    }
    for( let i = 0 ; i < arr.length ; i++ )
    {
        if(arr[i] == true)
           count++;
    }

       return count;
}
console.log( countTrue([false, false, true, false,false, true, true, false ]) );

// node script.js