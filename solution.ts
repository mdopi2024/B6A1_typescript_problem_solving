// problem 1;

type FormatValueType = string | number | boolean;

const formatValue = <T extends FormatValueType>(value: FormatValueType): FormatValueType => {
    if (typeof value === 'string') {
        return value.toUpperCase()
    } else if (typeof value === 'number') {
        return value * 10;
    } else {
        return !value;
    }
}

const formatedValue = formatValue('hello world')

// problem 2
type GetLengthType = string | any[]
const getLength = (value: GetLengthType): number => {
    if (Array.isArray(value)) {
        return value.length;
    } else {
        return value.length;
    }
}

const gotLength = getLength('my name is opi korim')


//problem 3

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    getDetails() {
        return ` 'Name: ${this.name}, Age: ${this.age}'`
    }
}

const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);


//problem 4

type Book = {
    title: string;
    rating: number;
}


const filterByRating = (bookArray: Book[]): Book[] => {
    const filtered = bookArray.filter(book => book.rating >= 4);
    return filtered;
}

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
]

const filteredBooks = filterByRating(books)


//problem 5

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
    const filterUsers = users.filter(user => user.isActive === true)
    return filterUsers
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true, },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];


const activeUsers = filterActiveUsers(users)


// problem 6

type Book2 = {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;

}
const printBookDetails = (book: Book2) => {
    const { title, author, publishedYear, isAvailable } = book
    return `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? 'Yes' : 'No'}`
};

const myBook: Book2 = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

const printBook = printBookDetails(myBook)


//problem 7

type StringNumber = string[] | number[]
type StringNumber2 = (string | number)[] | number[] | string[]

const getUniqueValues = (array1: StringNumber, array2: StringNumber): StringNumber2 => {
    const unicArray: StringNumber2 = []
    for (let i of array1) {
        let isExist = false;
        for (let j = 0; j < unicArray.length; j++) {
            if (unicArray[j] === i) {
                isExist = true;
                break;
            }
        }
        if (!isExist) {
            unicArray[unicArray.length] = i
        }
    }
    for (let i of array2) {
        let isExist = false;

        for (let j = 0; j < unicArray.length; j++) {
            if (unicArray[j] === i) {
                isExist = true;
                break;
            }
        }
        if (!isExist) {
             unicArray[unicArray.length] = i
        }
    }
    return unicArray;

}

const array1 = [1, 2, 3, 4, 5, 3, 2, 1];
const array2 = [1, 2, 3, 4, 5, 3, 2, 1];

const unicValue = getUniqueValues(array1, array2)




//problem 8
type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (productArray: Product[]): number => {

    const totalAmount = productArray.reduce((amount, product) => {
        const totalPrice = product.price * product.quantity;
        const discountPrice = product.discount ? (totalPrice * product.discount) / 100 : 0;
        return amount += (totalPrice - discountPrice)
    }, 0)

    return totalAmount;

}

const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

const totalPrice = calculateTotalPrice(products)










