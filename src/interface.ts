// More about interface

interface User {
    name: string;
    age: number
}
const user1: User  = {
    name: "Debu",
    age: 25
}

interface Theme {
    readonly id: number; // not mutable
    theme : "dark" | "lite";
}
const theme: Theme = {
    id: 123,
    theme: "dark"
}

// functions handling using interface -----------------------------

interface DiscountCalculatorFun {
     (price: number) : number;
}
const discountFun: DiscountCalculatorFun = (p) => p+p;

// methods 
 
interface TeaMachine {
    start(): void;
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("Start");
    },
    stop(){
        console.log("Stop");
    }
}

// Index Signature --------------------------------

interface ChaiRating {
    [flavor: string] : number 
}
const rating: ChaiRating = {
    masala : 4.6,
    ginger: 4.8
}

// Multiple same Interface will merge ----------------------------------------
// Example

interface User {
    name: string
}
interface User {
    age: number
}

const u1: User = {
    name: "debu",
    age: 25
}

// Extand feature
// Example

interface A { a: string }
interface B { b:string }

interface C extends A,B { // this is how extand feature use in code
    c: string
}

const abc: C = {
    a: "a is here",
    b: "b is also here",
    c: "c is also required"
}
