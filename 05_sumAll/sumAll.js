const sumAll = function(start, end) {

    // check for negative numbers
    if(start < 0 || end < 0) {
        return "ERROR";
    }

    // check for non-integers
    if(start % 1 != 0 || end % 1 != 0) {
        return "ERROR";
    }

    // check for non numbers
    if(!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    let first = Math.min(start, end);
    let last = Math.max(start, end);

    let sum = 0;

    for(let i = first; i <= last; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
