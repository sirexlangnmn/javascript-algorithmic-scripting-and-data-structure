/* 
    04.3 - Factorialize - a - Number
 
*/


function factorialize(inputNumber) {
    
    for (var a = 1; inputNumber >= 1; inputNumber--) {
        a *= inputNumber;
        //  console.log(result);
    }
    return a;
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