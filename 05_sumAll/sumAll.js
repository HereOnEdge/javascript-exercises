const sumAll = function(num1 , num2) {
    //make a number for each number between by loopinng between
    // two numbers and pushing them into an array
    
    let result = ''
    if (typeof num1 === typeof 0 && typeof num2 === typeof 0){
        if (num1 < 0 || num2 < 0){
            result = "ERROR";
        } else {
            const numbers = [];
            result = +result ;   //convert result to integer; returns 0
            if (num1 == num2){
                numbers.push(num1, num2);
            } else if (num2 > num1){
                for (let i = num1; i <= num2; i++){
                    numbers.push(i);
            }} else {
                for (let i = num1; i >= num2; i--){
                    numbers.push(i);
                }
            }
            for(let number of numbers){
                result += number;
        }}} else {
            result = "ERROR";    
            }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
