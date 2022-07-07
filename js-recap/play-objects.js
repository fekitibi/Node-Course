const person = {
    name:'Max',
    age:29,
    greet(){
        console.log('Hi I am ' + this.name + ' I am '+this.age+' years old.')
    }
};

person.greet();