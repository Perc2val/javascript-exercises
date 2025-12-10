const findTheOldest = function(people) {
    let timeLived = people.sort((a, b) => ((b.yearOfDeath || 2025) - b.yearOfBirth)-((a.yearOfDeath || 2025) - a.yearOfBirth))
    return timeLived[0]
    
};

// Do not edit below this line
module.exports = findTheOldest;
