const person = {
    name:'Max',
    age:29,
    greet(){
        console.log('Hi I am ' + this.name + ' I am '+this.age+' years old.')
    }
};

const hobbies = ['asd', 'dsa'];

const copiedArray = [...hobbies];

console.log(copiedArray);

const toArray =(...args)=>{
    return args
};

console.log(toArray(1,2,3,4,5));