const repeatString = function(str , num) {
    let repeated = '';
    if(num >= 0){
        let i = 0;
        while(i < num){
            repeated += str;
            i++
        }
    } else {
        repeated = "ERROR";
    }

    return repeated
              
};
// Do not edit below this line
module.exports = repeatString;
