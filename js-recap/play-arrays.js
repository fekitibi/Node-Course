const person = {
    name:'Max',
    age:29,
    greet(){
        console.log('Hi I am ' + this.name + ' I am '+this.age+' years old.')
    }
};

const hobbies = ['asd', 'dsa'];
hobbies.forEach(element => {
    console.log(element);
});

console.log(hobbies.map(hobby =>'Hobby: ' + hobby));
console.log(hobbies);