function eachCharacterFrequencyInString(str) {

    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] == undefined) {
            obj[str[i]] = 1;
        }
        else {
            obj[str[i]] += 1;
        }
    }
}

eachCharacterFrequencyInString("dcsdfcqasacds");


// node eachCharacterFrequencyInString.js