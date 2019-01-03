/* 
    09.3 - Repeat - a - String 
*/

function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : '';
}

console.log(repeatStringNumTimes("Federex Potolin ", -1));
console.log(repeatStringNumTimes("Federex Potolin ", 4));