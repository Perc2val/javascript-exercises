const reverseString = function(str) {
    let gesplitted = str.split("");
    let reversed = gesplitted.reverse();
    let joined = reversed.join("");
    return joined
};

// Do not edit below this line
module.exports = reverseString;
