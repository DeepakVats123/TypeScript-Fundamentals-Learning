// Types and Interface

// Type ----------------------------------------------
// This is how we define the type using type keyword

// Example
// Litral Type
type sugar = "white sugar" | "brown sugar"; // it's also called "Litral Type", because we decided the value here.

type ChaiOrder = {
    type: string;
    sugarType: sugar;
    strong: boolean
}
function makeChai(order: ChaiOrder){
    order.strong
}

makeChai({type: "chai", sugarType: "white sugar", strong: true});
makeChai({type: "chai", sugarType: "brown sugar", strong: true});

// InterFace in TS-----------------------

// this is the syntax of interface
interface CupSize {
    size: "small" | "Large";
    ChaiType : "masala" | "ginger";
}

// key is compulsery in interface we can't do this----------
// interface CupSize {
//     "small" | "Large"
// }

// here is the use case of interfce, with class interface is works better 
// Example - 1 ---------------------------------------------------------
class Chai implements CupSize {
    size: "small" | "Large" = "Large";
    ChaiType: "masala" | "ginger" = "ginger";
}

// Example-2------------------------------------------------------------
interface UserDetails {
    name: string;
    email: string;
}
const user:UserDetails = {
    name: "deepak",
    email: "deepak@gmail.com"
}

// Intersection -----------------------------------------------

// Example - 1 use of & -----------

type BaseChai = { teaLeaves: number }
type ChaiMaking = { making: string }

type PerfectChai = BaseChai & ChaiMaking // using & now both the properties are important 

const tea:PerfectChai = {
    teaLeaves: 2,
    making: "ginger with tulsi"
}

// example - 2 - Optional key ------------------
 type UserType = {
    userName: string;
    bio?: string // optional value
 }
 const user1: UserType = {
    userName: "Debu"
    // bio is optional here & it's completly fine.
 }

 const user2: UserType = {
    userName: "Debu Vats",
    bio: "Software Engineer"
 };

//  example - 3 - readOnly ------------------------
type AppDetails = {
    readonly appName: string; // readonly (this is how we use)
    version: number
}

// we can define only one time.
const app: AppDetails = {
    appName: "E-com",
    version: 2.0
}

// app.appName = "Web"    // its not allowed here because we can define only one time.



