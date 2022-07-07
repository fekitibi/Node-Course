const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

function summarizeUser(userName, userAge, userHasHobbies){
    return 'The user:' + userName + userAge + userHasHobbies;
}

console.log(summarizeUser(name,age,hasHobbies));