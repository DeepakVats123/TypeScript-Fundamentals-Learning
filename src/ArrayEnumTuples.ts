// Array, Enum & Tuples in TypeScript

// syntax
const names: string[] = ["Manthan", "Lucky", "Deepak"]; // array of string

const age: number[] = [26,23,29]; // array of numbers

const email: Array<string> = ["manthan@gmail.com", "lucky@gmail.com", "deepak@gmail.com"] // another syntax

// Array of Objects
type User = {
    name: string;
    age: number
}
const users: User[] = [
    {name: "Deepak",age: 29},
    {name: "Manthan", age: 26},
    {name: "Sagar", age: 23}
];

// Readonly array 

const cities: readonly string[] = ["Haridwar", "Roorkee", "Rishikesh"];
// cities.push("Gurugram") its not allowed because it's a readonly array.

// Two dimentional or multi directional array
const table: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// Tuples -----------------------------------------------------------------------------
// Tuple is also array we just define the type of the values

// Example-1
let userTuple: [string, number]
userTuple= ["Debu",29]
// userTuple= [29, "Debu"]  we can't do that, we have to follow the right order

// Example-2
let userInfoTuple: [string,number, boolean?] // optional value
userInfoTuple = ["Debu", 29, true]
userInfoTuple = ["Debu", 29]   // we can also leave that optional value

// Readonly Tuple 

const userAges: readonly [number, number] = [29, 26] // this is the syntax of readonly tuple

// Named Tuple

const userDetails: [name: string, age: number] = ["Debu", 29];

// Enums ------------------------------------------------------------------------------

// Syntax of Enum
enum Gender {
    MALE, // We should define the values in Caps (It's a standerd practice)
    FEMALE,
    OTHER
}
const debuGender = Gender.MALE;  //this is how we consume it, it will give suggestion

// Auto-Increse Value----------------------------

enum UserID {
    EMPLOYEE_ID = 101,
    EMPLOYEE_BRANCH, // 102 it will increse automatically (Not Recommended but used by some developers)
    EMPLOYEE_CODE, // 103
}

// Example

enum TeaType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: TeaType){
    console.log(`Your ${type} Tea is Ready`)
}
makeChai(TeaType.GINGER) // we will get suggestions
makeChai(TeaType.MASALA)
// makeChai("masala")  // we can't pass arguments like this 

// Random Enums ( Not a standerd practice)
//  we should make enums for a singe data type like number, string.

enum RandomUserEnum { // not recomended for good code practice
    ID = 1,
    NAME = "Debu Vats",
    CODE = 202020
}

enum EmployeeCodes {  // good practice (because we are provideing only numbers)
    DEEPAK = 202020,
    MANTHAN = 303030,
    SAGAR = 404040
}
const sagarCode = EmployeeCodes.SAGAR // this is how we can consume easily

// Constant Enums

const enum BloodGroup {
    A,
    B,
    o
}
const DeepakBloodGroup = BloodGroup.o






