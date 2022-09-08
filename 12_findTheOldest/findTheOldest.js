const findTheOldest = function(array) {
    let i = 0;
    let agesArray = [];
    while (i < array.length){
        if (array[i].hasOwnProperty('yearOfDeath')){
            array[i].age = array[i].yearOfDeath - array[i].yearOfBirth ;
            agesArray.push(array[i].age);
        } else {
            array[i].age = 2022 - array[i].yearOfBirth;
            agesArray.push(array[i].age)
        }
        
        i++;
    }
    let oldest = 0;
    for (let ageNum of agesArray){
        if (ageNum > oldest){
            oldest = ageNum;
        }
    }
    let oldestPerson = "";
    for (let person of array){
        if (person.age == oldest){
            oldestPerson = person;
        } else {
            continue;
        }
    }
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
