/* 
    10.1-Truncate-a-String
*/

function truncateString(str, num) {
    if (str.length > num && num > 3) {
        return str.slice(0, (num - 3)) + '...';
    } else if (str.length > num && num <= 3) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}


// these will fall in if condition
// if string length is greater than number and number is greater than 3
console.log(truncateString('tyranausaurousrex', 5));
console.log(truncateString('tyranausaurousrex', 6));
console.log(truncateString('tyranausaurousrex', 7));


// these will fall in else if condition
// if string length is greater than number and number is less than or equal 3
console.log(truncateString('Orange', 1));
console.log(truncateString('Orange', 3));
console.log(truncateString('Orange', 7));

