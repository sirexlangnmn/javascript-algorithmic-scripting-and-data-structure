/* 
    07.2 - Return - Largest - Numbers -in -Arrays 
*/

var numArr = [
    [583, 999, 113, 55],
    [777, 187, 798, 444],
    [1023, 777, 832, 285],
    [83, 99, 115, 888]
];


function largestAmongArray(inputArray) {
    return inputArray.map( function (group) {
        return group.reduce( function (prev, current) {
            return (current > prev) ? current : prev;
        });
    });
}


console.log(largestAmongArray(numArr));