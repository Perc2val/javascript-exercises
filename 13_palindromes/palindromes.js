const palindromes = function (string) {
    let lowString = string.toLowerCase();
    let punctuation = /[\.,?!" "]/g;
    let newText = lowString.replace(punctuation, "");
    let arr = newText.split("");
    let revArr = arr.reverse()
    let joinArr = revArr.join("")
    if (newText === joinArr){
        return true
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
