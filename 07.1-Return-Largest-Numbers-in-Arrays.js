/* 
    07.1 - Return - Largest - Numbers -in -Arrays
 */


var numArr = [
    [583, 999, 113, 55],
    [777, 187, 798, 444],
    [1023, 777, 832, 285],
    [83, 99, 115, 888]
];

function largestAmongArray(inputArray) {
    var results = [];
    //console.log(inputArray.length);
    for (var n = 0; n < inputArray.length; n++) {
        var largestNumber = inputArray[n][0];
        //console.log(inputArray[n][0]);  // first element of every array
        for (var i = 1; i < inputArray[n].length; i++) {
            //console.log(inputArray[n].length);  // 4 x 4, because in numArr we have 4 array and in every array we have 4 elements each
            if (inputArray[n][i] > largestNumber) {
                largestNumber = inputArray[n][i];
                //console.log(largestNumber);
            }
        }
        //console.log(results[0]);
        results[n] = largestNumber;

    }
    return results;

}


console.log(largestAmongArray(numArr));

/* 
Explanation 
    1.  inputArray.length give the number of array inside of our numArr which is actually a multi Array
    2.  for loop: 
        1st argument: n = 0, because the counting in array start from zero, array is base zero.
        2nd argument: n lessthan the length of an array
        3rd argument: plus 1 every iteration
    3.  inside the first for loop we are trying to get the first value of every array inside our numArr 
        which is multi array and store it to var largestNumber.
        inputArray[n][0] 1st argument = n = 0, and the 2nd arguments is 0 too. So in the first iteration, 
        it gives the first value of every array inside our numArr.
    4.  





*/