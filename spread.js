
/*
Complete the code in Index.js in a way that 
the function should return a single object
 which has key as the parameter someKey and value as someValue

*/

let key = "someKey";
let value = "someValue";

let convertToKeyValuePair = (someKey,someValue)=>{

    // this function should return a single object which has 
    //key as the value of someKey and value as someValue
    
    let finalObject = {[someKey]:someValue};
    return finalObject;

};

let object = convertToKeyValuePair(key,value);
alert(object);

//module.exports = {convertToKeyValuePair:convertToKeyValuePair};