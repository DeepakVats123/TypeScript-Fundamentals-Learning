// Objects in TS -------------------------

let user: {         // created a variable and define the type
    name: string;
    age: number;
}
user  = {
    name : "Manthan",
    age : 26 
}

// Aliece Object

type Movie = {
    title : string;
    ticketPrice : number;
}

let m1: Movie = {
    title : "Dhrundhar",
    ticketPrice : 250,
}

// here we created a new object with extra property
let m2 = {
    title : "Superman",
    ticketPrice : 250, // if we comment out this then 
    rating : "4.2" // extra key Value pair
}
m1 = m2; // it has no problem because it has all the properties of type Movie
// but if we miss any property of type Movie then it we show error, we need bair minium properties
// if it has extra property then it will be fine but if it has less then it has problem.

// Example to define a object with clearity (good code practice).

type Item = { name: string; quantity: number }
type Address = { street: string; pincode: number }

type Order = {
    id: string;
    items : Item[]; // this is how we define array of object
    address : Address
}

//  use of Partial / Required / Pick / Omit

// Example of Partial------------------------------------------------------------------
const handleOrder = (orderData: Partial<Order>) =>{ // syntax of Partial
    console.log("Order is", orderData)
}

// when we use Partial we can use use object keys partyially, no need to pass hole object.
handleOrder({id: "sdhbhj"})
handleOrder({items: [{name: "abc", quantity: 1},{name: "xyz", quantity: 1}]})
handleOrder({address: {street: "8", pincode: 249407}})
handleOrder({})

// Example of Required ------------------------------------------------------------

const handleOrder2 = (orderData: Required<Order>)=>{  // syntax of Required
    console.log("Order is", orderData)
}
// when we use all fields are 
handleOrder2({id: "123", items: [{name: "abc",quantity: 2}], address: {street: "8", pincode: 249407}})

// Example of Pick ------------------------------------------------------------

type UserDetails = {
    name: string;
    age: number;
    email: string;
}

// with the help of Pick we can limit 
type  GetUserDetails = Pick<UserDetails, "name" | "age">

const userFinalDetails: GetUserDetails = {
    name: "user",
    age: 25
}


// Example of Omit --------------------------------------------------------
type OmitExample = {
    title : string;
    price : number;
    status : boolean;
}

type OmitUser = Omit<OmitExample, "status"> // status is not needed then

const omitUser: OmitUser = {
    title: "omitUser",
    price: 2300,
    // status : true  // its not acceptable now
}





