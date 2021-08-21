
//Q3 TO UPPER CASE FIRST LETTER OF EACH WORD IN A STRING
function firstLetterUpperCaseOfEachWord(str9){

    let ans = "";
    if(str9[0] != " ")
    {
        ans += str9[0].toUpperCase();
    }
    
    for(let i = 1 ; i < str9.length ; i++ )
    {
        if(str9[i] == " ")
        {
            ans = ans +" "+str9[i+1].toUpperCase();
        }
        else if(str9[i-1] != " " )
        {
            ans = ans + str9[i];
        }
    }
    console.log(ans);
}

firstLetterUpperCaseOfEachWord("charan deep singh");


// node Q3.firstLetterUpperCaseOfEachWord.js