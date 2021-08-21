
//Q2. BINARY TO DECIMAL CONVERSION

function binaryToDecimal(binary)
{

    let pow = 0;
    let ans = 0;
    for( let i = binary.length - 1 ; i >= 0 ; i--)
    {
        let binaryDigit = parseInt(binary[i]);
        ans += (Math.pow(2,pow) * binaryDigit);
        pow++;
    }

    return ans;
}

console.log(binaryToDecimal("1010"));

// node Q2.binaryToDecimalConvertion.js


    // let ans = 0;
    // let pow = 0;
    // let len = binary.length;
    // console.log(len);
    // while(len != 0 )
    // {
    //     let rem = binary % 10;
        
    //     ans +=(parseInt(rem) * Math.pow(2, pow)); 
    //     //console.log(ans);
    //       binary /= 10;
    //       pow++;
    //       len--;
    // }