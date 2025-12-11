// Type Narrowing is more about the good practice rater than the data type.
//here is the example
function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `here is your ${kind}`
    }
    return `here is your ${kind} glass chai`
}

console.log(getChai("masala Chai"));
console.log(getChai(2)); // both cases are handled by good practice.




// one more example for better understanding......>>>>

type chaiOrder = {
    type: string
    size: number
}
function getChaiOrder (obj:any):  chaiOrder | "NA" {
    if(obj.type === "string" && obj.size === "number"){
        return obj;
    }
    return "NA"
}

getChaiOrder({type: "masala", size: "twon"}) // it will return NA
getChaiOrder({type: "masala", size: 2}) // it will return {}

// type Narrowing is important for double check

// Example-3
type masalaChai = {type: "masala"; spiceLevel: number}
type gingerChai = {type: "ginger"; amount: number}
type elichiChai = {type: "elichi"; amount: number}

type chai = masalaChai | gingerChai | elichiChai

function collectOrder(obj: chai){
    switch (obj.type) {
        case "masala":
            return "masala Chai"
            break;

        case "ginger":
            return "ginger Chai"
            break;
        
        case 'elichi': 
            return "elichi Chai"
            break;
        // default:
        //     break; no need of this in this case because we already know the all types
    }
}

// collectOrder({type: "masala", spiceLevel: "2"}) // it will show error because we are passing string
collectOrder({type: "masala", spiceLevel: 2}) // its perfect, also we have suggestions


