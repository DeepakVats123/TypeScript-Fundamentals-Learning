// Axios in TypeScript
import axios from "axios";
// import axios, { type AxiosResponse } from "axios";  // it will also work
import type { AxiosResponse } from "axios"; // this is how we import type (it's a good practice)

// axios.get("https://xyx.com/") // basic
// .then(Response => {
//     console.log(Response)
// } )

// const api = "https://jsonplaceholder.typicode.com/todos/1"
// we will get this data
// {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
// }

//  Example using Axios-----------------------------------------------------------------
interface Todo {
    userId : number;
    id : number;
    title : string;
    completed : boolean;
}
const getData = async () => {
   try {
     const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    // AxiosResponse is a type of response
    console.log(response.data); // now we will get the response
   } catch (error: any) {
        if(axios.isAxiosError(error)){
            console.log("Error", error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
   }
}

// Example using Fetch ------------------------------------------------------------------

const fetchDataUsingFatch = async () =>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")

        if(!response.ok){
            throw new Error(`HTTP Error ${response.status}`);
        }
        const data: Todo = await response.json();
        console.log(data)
    } catch (error: any) {
        console.log(error)
    }
}
