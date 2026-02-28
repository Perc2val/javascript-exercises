const repeatString = function(string, num) {
    let result = "";
    if (num == "") {
        return "";
    } else if (num < 0) {
        return "ERROR"
    } else {
        for (let i = 0; i < num; i++)
            result += string;
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
