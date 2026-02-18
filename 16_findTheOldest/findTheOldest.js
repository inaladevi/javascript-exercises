const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
const findTheOldest = function(people) {
    return people.reduce(function(oldest, currentPerson){ 
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        if (currentAge > oldestAge) {
            return currentPerson;
        } else {
            return oldest;
        }

    });

};

// Do not edit below this line
module.exports = findTheOldest;
