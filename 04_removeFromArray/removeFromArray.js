const removeFromArray = function(array, ...values) {
    return array.filter(
        v => !values.includes(v)
    );
};

// Do not edit below this line
module.exports = removeFromArray;
