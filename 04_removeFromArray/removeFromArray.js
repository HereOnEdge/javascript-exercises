const removeFromArray = function(arr , ...items) {
    let i = 0 ;
    label:
    while (i<arr.length){
        for (let item of items){
            if (item === arr[i]){
                arr.splice(i,1)
                continue label 
            } else {
                continue
            }
        
        }
        i++
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
