// Types and Interface

// Type ----------------------------------------------
// This is how we define the type using type keyword
// Example

type sugar = "white sugar" | "brown sugar";
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









