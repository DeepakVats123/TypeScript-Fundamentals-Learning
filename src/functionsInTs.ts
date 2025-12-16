// Functions in TypeScript

// this is how we set return data type
function getUser(name: string, age: number): string {
   return `name ${name}, age ${age}`; // we can only return string otherwise it we show error
}

// use of Void ----------------------------------------------------
// void means it will not return anything
function login (): void {
    console.log("all set this function will not return anyting")
}

// example of Optional parameter / default parameter 

function optionalParameter (name?: string) : void{
    if(name){
        console.log(name);
    }
}

function defaultParameter (name: string = "Debu") : string{
    return name;
}