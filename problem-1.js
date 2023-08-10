function cubeNumber (number){
    const result = Math.pow(number,number);
    return result;
} 
const myresult = cubeNumber (3);
console.log (myresult);




function cubeNumber (number){
    const result = Math.pow (number,number-1);
    return result; 
}

const myResult = cubeNumber (4);
console.log (myResult);
