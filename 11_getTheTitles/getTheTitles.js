const getTheTitles = function(array) {
    let i = 0;
    let result = [];
    while (i < array.length){
        result.push(array[i].title)
        i++
    }
    return result
};

// Do not edit below this line
module.exports = getTheTitles;
