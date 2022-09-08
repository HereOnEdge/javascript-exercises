const fibonacci = function(num) {
    let numbers = [1,1]
    let i = 1
    if(num < 0){
        return "OOPS"

    } else {
        while (i < num){
            numbers.push(numbers[i] + (numbers[i - 1]))
            i++
        }
        return numbers[i-1]
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
