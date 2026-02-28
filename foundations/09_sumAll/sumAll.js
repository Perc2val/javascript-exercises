const sumAll = function(numOne, numTwo) {
    let lowEnd;
    let highEnd;
    let arr = [];
    if (numOne % 1 != 0 || numTwo % 1 != 0 || typeof numOne !== "number" || typeof numTwo !== "number" || numOne < 0 || numTwo < 0){
        return "ERROR";
    } else {
        if (numOne < numTwo){
            lowEnd = numOne;
            highEnd = numTwo;
        } else {
            highEnd = numOne;
            lowEnd = numTwo;
        }
        for (let i = lowEnd; i <= highEnd; i++){
            arr.push(i);
            
        }
    }
    return arr.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)
};

// Do not edit below this line
module.exports = sumAll;
