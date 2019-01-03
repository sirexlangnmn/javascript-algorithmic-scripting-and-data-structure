/* 
    04.2 - Factorialize - a - Number
 
*/

function factorialize(inputNumber) {
    if(inputNumber === 0 ){
        return 1;
    }
    return inputNumber * factorialize(inputNumber - 1);
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
