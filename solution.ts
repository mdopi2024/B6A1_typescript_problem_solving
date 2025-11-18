

type FormatValueType = string | number | boolean;

const formatValue = (value: FormatValueType): FormatValueType => {
    if (typeof value === 'string') {
        return value.toUpperCase()
    } else if (typeof value === 'number') {
        return value * 10;
    } else {
        return !value;
    }
}




type GetLengthType = string | any[]
const getLength = (value: GetLengthType): number => {
    if (Array.isArray(value)) {
        return value.length;
    } else {
        return value.length;
    }
}




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





type Book2 = {
    title: string;
    rating: number;
}


const filterByRating = (bookArray: Book2[]): Book2[] => {
    const filtered = bookArray.filter(book => book.rating >= 4);
    return filtered;
}





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





type Book = {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;

}
const printBookDetails = (book: Book) => {
    const { title, author, publishedYear, isAvailable } = book
    return `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? 'Yes' : 'No'}`
};




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


