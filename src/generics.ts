// Generics in Typescript

// Syntax
function wrapInArray<T>(item: T): T[]{
    return [item, item, item]
}

// it makes the code resuable 

wrapInArray("car") // it will return a array of strings
wrapInArray(25) // it will return a array of numbers
wrapInArray({car_modal: "Tata Cierra 2025"}) // it will return a array of objects

// example-2

function pairFun<A, B>(a: A, b: B): [A, B] {
    return [a, b]
    // return [b, a] // it will not accept
}

pairFun("masala", 20) // it will work fine with any type
pairFun([], {}) // it will work fine with any type


// Generic Interface 

interface Box<T> {
    content: T
}
const numberBox: Box<number> = {content: 10};
const stringBox: Box<string> = {content: "10"};