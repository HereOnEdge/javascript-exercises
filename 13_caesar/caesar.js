const caesar = function(string, shift) {
    // create two constants for each lower and upercase letters
    
    
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    

    //LOOP THROUGH ALPHABET AND STRING 
    let encrypted = "";
    for (let i = 0; i < string.length ; i++){
        
        alphaLoop:
        for (let y = 0 ; y < alphabet.length ; y++){
            if (string[i] == "," || string[i] == "." || string[i] ==
             " " || string[i] == "!"){
                encrypted += string[i];
                break alphaLoop;
            } else if (string[i] === alphabet[y]){
                
                // if the letter is upperCase
                if (y <= 25){
                    // check if y + shift <= 25
                    if (y + shift <= 25){
                        // if it is
                        // check if y + shift >= 0
                        if (y + shift >= 0){
                            // if it is  
                            // work as normal
                            encrypted += alphabet[y + (shift)];
                            break alphaLoop;
                        } else {
                            // if its not
                            encrypted += alphabet[((y + shift) + 25) + 1]
                        }
                    } else { 
                        // if its not
                        encrypted += alphabet[((y - 25) + shift) - 1] ;
                    } // if letter is lowerCase
                } else if (y > 25){
                    // if islower return true
                    // check if y + shift <= 51
                    if (y + shift <= 51){
                        // if it is
                        // check if y + shift >= 26
                        if (y + shift >= 26){
                            // if it is 
                            // work as normal
                            encrypted += alphabet[y + (shift)];
                            break alphaLoop;
                        } else {
                            // if its not
                            encrypted += alphabet[((y + shift) + 25) + 1];
                        }
                    } else {
                        // if its not
                        encrypted += alphabet[((y - 25) + shift) - 1];
                    }
                }   
            } else {
                continue;
            } 
            
            
        }
    }
    return encrypted;
    //FIND A MATCH AND SHIFT THE LETTER



    

    


    
};


// Do not edit below this line
module.exports = caesar;
