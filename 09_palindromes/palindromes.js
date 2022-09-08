const palindromes = function (str) {
    let lowerStr = str.toLowerCase() 
    
// split the string for each letter
    let toArray = lowerStr.split("")    

// replace every "." or "," with ""
    for (let i = 0; i < toArray.length ; ){
        if (toArray[i] === " " || toArray[i] === "." ||
        toArray[i] === "," || toArray[i] === "!"){
            toArray.splice(i , 1); 
        } else {
            i++
            continue
        }
    }
    

    

// loop for each letter inside array
    let result = false;
    for (let i = 0; i < toArray.length; i++){

        /* check each letter index to be equal as
        it's counter index letter */
        if (toArray[i] ===
             toArray[(toArray.length - i)-1]){
            // if its equal , return true
                result = true;
            } else {
            // return false if its not equal
                result = false;
                break;
            }
        }
    return result
    





};

// Do not edit below this line
module.exports = palindromes;
