var name = 'Max';
var age = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobbies){
    return 'The user:' + userName + userAge + userHasHobbies;
}

console.log(summarizeUser(name,age,hasHobbies));