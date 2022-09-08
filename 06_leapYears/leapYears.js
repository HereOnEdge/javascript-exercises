const leapYears = function(year) {
    // check if the number has any remainder if its divided by 4
    let result
    // if it has a remainder it,s not a 'leap' year
    if ( year % 4 !== 0 ){
        result = false; 
    } else { 
        //if it does not have a remainder
        
        // check if it has a remainder if it is divided by 100
    // if it does have a remainder yhen its a 'leap' year
        if (year%100 !== 0){
            result = true;
        } else {
            // if it does not have a remainder 
            // check if it has a remainder when divided by 400
            if (year % 400 == 0){
        // if it does not have a remainder then its a "leap" year
                result = true;
            } else {
        // if it does have a remainder then its not a 'leap' year
                result = false;
            }
        }
    }  
    
    return result;
};

// Do not edit below this line
module.exports = leapYears;
