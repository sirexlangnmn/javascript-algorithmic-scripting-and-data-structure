/* 
    09.2 - Repeat - a - String 
*/

function repeatStringNumTimes(str, num) {
    if (num < 0) {
        return "";
    } else if (num === 1) {
        return str;
    } else {
        return str + repeatStringNumTimes(str, num -1);
    }

}

console.log(repeatStringNumTimes("Federex Potolin ", -1));
console.log(repeatStringNumTimes("Federex Potolin ", 4));