/* 
    09.1 - Repeat - a - String
*/


function repeatStringNumTimes (str, num) {
    if (num > 0) {
        return str.repeat(num);
    }
    return "";
}

console.log(repeatStringNumTimes("Federex Potolin ", -1));
console.log(repeatStringNumTimes("Federex Potolin ", 4));
