//Q4. Reverse each word of the String
//INPUT =>   My Name is Charan
// OUTPUT => yM emaN si narahC

function reverseEachWordOfString(str11) {
    let ans = "";
    let tempAns = "";

    for (let i = str11.length - 1; i >= 0; i--) {
        
        if (str11[i] == " ") 
        {
            ans = tempAns + " " + ans;
            tempAns = "";

        }
        else if( i == 0 )
        {
            ans = tempAns + str[i] +ans;
        }
        else 
        {
            tempAns += str[i];
        }
    }
    console.log(ans);
}

reverseEachWordOfString("My Name is Charan");

// node Q4.reverseEachWordOfString.js