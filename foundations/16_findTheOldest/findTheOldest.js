const findTheOldest = function(arr) {
  return arr.reduce((oldest, person) => {
    let now = new Date().getFullYear();
    let oldest_age = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : now - oldest.yearOfBirth;
    let person_age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : now - person.yearOfBirth;

    if (person_age > oldest_age) {
      return person;
    } else {
      return oldest;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
