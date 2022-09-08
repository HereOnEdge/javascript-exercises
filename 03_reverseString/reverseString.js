const reverseString = function(string) {
    let listedString = string.split('').reverse();
    let reversed = listedString.join('');
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
