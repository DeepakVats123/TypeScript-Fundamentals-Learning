// Type Assertion 

// Example - 1----------------------
let response: string = "10";

// let response2 = response.    if we do that we don't get suggestions of string's methods so we can use assertion here
let response2 = (response as string).length // this is called assertion we need this sometime to set data Type to know our code and get suggestions in our code 

// Example - 2----------------------
let bookString = '{"name": "rich dad poor dad"}' // json data let suppose its coming from Local Storage.

type Book = {name: string}

let bookData = JSON.parse(bookString) as Book // here we are using assertion otherwise we will not get suggestions
// its not a conversion it gives assurity 

bookData.name // now we can easily get suggestions here because 

// Example - 3 -----------------------------
//in this type of Schenario we use this
let inputElement = document.getElementById("inpField") as HTMLInputElement; 

// Any vs unknown ---------------
let value: any ;
value= 10;
value = true;
value = "a";
value.toUpperCase() // here we can see its not showing error

let value2: unknown ;
value2= 10;
value2 = true;
value2 = "a";
// value2.toUpperCase() /// here we can see error

if(typeof value2 === "string"){
    value2.toUpperCase()
}

// Example - 4 -------------------------

let data: unknown = "abc";
let strData: string = data as string  // otherwise it will show error 

// Never ------------------------

function NeverReturnAnything():never {   // example-1
    while(true){}
} // we are not returning anything here


// example-2 

type Role = "admin" | "user"
function redirectBasedOnRole(role: Role): void{
    if(role === "admin"){
        console.log("Redirecting to admin dashboard")
        return
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard")
        return
    }
    role; // if we check by hover here it will show never type,it is useful for suggestion because we handle all the casis of role thats why it shows nothing is pending.
}
