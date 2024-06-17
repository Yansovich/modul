import {someValue as someValueFromIndex2, operationFromIndex2} from "./index2.js";

export function minus(a, b) {
    console.log(a - b);
    return a - b
}

export function sum(a, b) {
    console.log(a + b);
    return a + b
}

const someValue = 'value'
const operation = 'operation'

export default function logValue () {
    console.log(someValue);
    console.log(operation);
}


// export {minus, sum}
// export default logValue