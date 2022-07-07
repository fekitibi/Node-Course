const person = {
    name:'Max',
    age:29,
    greet(){
        console.log('Hi I am ' + this.name + ' I am '+this.age+' years old.')
    }
};

const printName = ({name})=>{
    console.log(name);
};

printName(person);

const {name, age} = person;

console.log(name,age);