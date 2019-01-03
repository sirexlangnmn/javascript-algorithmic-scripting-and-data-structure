/* 
    07.3 - Return - Largest - Numbers -in -Arrays
 */

var numArr = [
    [583, 999, 113, 55],
    [777, 187, 798, 444],
    [1023, 777, 832, 285],
    [83, 99, 115, 888]
];


function largestAmongArray(inputArray) {
    return inputArray.map(Function.apply.bind(Math.max, null));
}


console.log(largestAmongArray(numArr));