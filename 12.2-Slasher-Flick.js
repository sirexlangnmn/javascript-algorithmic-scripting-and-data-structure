/* 
    12.2-Slasher-Flick

    input ([1, 2, 3, 4, 5], 2) output [3, 4, 5]
    input ([6, 7, 8, 9, 10], 3) output [9, 10]
*/


function slasher(inputArray, howMany) {
    return inputArray.slice(howMany);
}

console.log(slasher([1, 2, 3, 4, 5], 2));
console.log(slasher([6, 7, 8, 9, 10], 3));