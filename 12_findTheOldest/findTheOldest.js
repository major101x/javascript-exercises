const findTheOldest = function (arr) {
  //Iterate array
  //Get deathyear and birthyear
  //if birthyear === undefined, set birthyear as new Date().getfullYear
  //Minus deathyear - birthyear
  //Only return obj with highest age
  let age = 0;
  return arr.reduce((prev, curr) => {
    if(prev.yearOfDeath === undefined) {
        prev.yearOfDeath = new Date().getFullYear()
    }
    const prevAge = prev.yearOfDeath - prev.yearOfBirth;
    const currAge = curr.yearOfDeath - curr.yearOfBirth;

    const older = prevAge > currAge ? prev : curr;
    return older;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
