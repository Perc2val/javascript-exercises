const fibonacci = function(stNum) {
    const fib = [1, 1];
    let num = +stNum;
    if (num < 0){
    return "OOPS"    
    } else if (num === 0) {
        return 0
    }
    for (let i = 2; i < num; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    let lastElement = fib[fib.length -1];
    return lastElement
};

// Do not edit below this line
module.exports = fibonacci;
