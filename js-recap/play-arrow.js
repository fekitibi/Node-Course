const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;
const summarizeUser =  (userName, userAge, userHasHobbies)=>{
    return 'The user:' + userName + userAge + userHasHobbies;
}

const add = (a,b)=> a+b;
const addOne = a=> a+1;
const addR = ()=> 1+2;

console.log(summarizeUser(name,age,hasHobbies));