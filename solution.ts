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
const person2 = new Person('Alice', 25);


//problem 4

type Book={
    title:string;
    rating:number;
}


const filterByRating =<T extends Book>(bookArray:T[]):T[]=>{
 const filtered = bookArray.filter(book=> book.rating >=4);
 return filtered;
}


const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
]

const filteredBooks = filterByRating(books)








