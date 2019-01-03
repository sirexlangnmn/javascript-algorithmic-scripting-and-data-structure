/* 
    04.1 - Factorialize - a - Number
 
*/


function factorialize(inputNumber) {
    var result = 1;
    for(var i = inputNumber; i > 0; i--) {
        result *= i;
        //  console.log(result);
    }
    return result;
}

/* num1 = factorialize(1);
console.log(num1); */

num2 = factorialize(10);
num3 = factorialize(20);
num4 = factorialize(0);
num5 = factorialize(5); 

console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
