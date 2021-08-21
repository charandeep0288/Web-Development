//Q1. DECIMAL TO BINARY NUMBER CONVERSION
// number given in string

function decimalToBinary(num)
{
    let ans = "";

    while(num != 0 )
    {
        let rem = num % 2;
        ans = rem + ans;
        num =parseInt(num/ 2);
        //num = Math.floor(num/2);
    }
    console.log(ans);
}

decimalToBinary(parseInt("10"));