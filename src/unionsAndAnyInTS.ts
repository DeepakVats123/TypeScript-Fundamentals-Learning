// Unions ans Any

// Unions 

let mySubscribers: number | string = 1000;
mySubscribers = "1K" // Both are valid

// we can  create like this also, it will give suggestions also.
let apiResponse: 'pending' | 'success' | 'error' = 'pending'; 
apiResponse = 'success';
apiResponse = 'error';

// Any >>>>>>>>>>>

let data; // in this case it will take any beacause we havent declare anyting its still unknown

let result: any = "hello I am result"; // we can also create variable with any Data Type.
result = 22;
result = {}
result = []
result = true // here we can asssign any data type to this variable, but it's not a good parctice.

// but there are some usecases where we need any so that's why it's here.
// any is not recommended.



