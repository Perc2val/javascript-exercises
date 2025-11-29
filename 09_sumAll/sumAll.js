const sumAll = function(numOne, numTwo) {
    let array = []
    if (numOne < 0 || numTwo < 0){
        return "ERROR";
    }
    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)){
        return "ERROR"
    }
    if (numOne > numTwo){
        lowNum = numTwo;
        highNum = numOne;
    } else {
        lowNum = numOne;
        highNum = numTwo;
    }
    for(let i = lowNum; i <= highNum; i++){
        array.push(i)
    }
    return result = array.reduce((sum, current) => sum + current, 0)
};

// Do not edit below this line
module.exports = sumAll;
