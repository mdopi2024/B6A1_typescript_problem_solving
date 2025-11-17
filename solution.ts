// problem 1;

type FormatValueType = string | number | boolean;

const formatValue=<T extends FormatValueType>(value:FormatValueType):FormatValueType=>{
 if(typeof value === 'string'){
    return value.toUpperCase()
 }else if(typeof value === 'number'){
    return value*10;
 }else{
    return !value;
 }
}

const formatedValue=formatValue('hello world')

// problem 2
type GetLengthType = string | any[]
const getLength = (value:GetLengthType) :number =>{
  if(Array.isArray(value)){
    return value.length;
  }else{
    return value.length;
  }
}

const gotLength = getLength('my name is opi korim')


//problem 3

class Person {
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name= name;
        this.age = age
    }

    getDetails (){
      return ` 'Name: ${this.name}, Age: ${this.age}';`
    }
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());





