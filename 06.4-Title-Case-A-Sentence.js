/* 

    06.4 - Title - Case - A - Sentence

*/


function titleCase(inputString) {
    inputString = inputString.split(' ');
    //console.log(inputString.length);
    
    for(var i = 0; i < inputString.length; i++) {
        inputString[i] = inputString[i].toLowerCase().split('');
        //console.log(inputString[i]);
        inputString[i][0] = inputString[i][0].toUpperCase();
        //console.log(inputString[i][1]);
        inputString[i] = inputString[i].join('');
        //console.log(inputString[i]);
    }
    return inputString.join(' ');
}



input1 = titleCase('The little tea pot');
input2 = titleCase('Life of the programmer');

console.log(input1);
console.log(input2);

/* 
    Explanation 
    1.  split the inputString 
    2.  then inside for loop, 
        1st process: value of inputString which an array is converted to lower case then split individually. 
        2nd process: inputString[i][0] the first argument is pertaining to the current element of an array, the 2nd argument which is zero is pertaining to starting point where the string will be replace
        3rd process: since we split the array individually in the 1st process inside the loop, we have to join the array again before completion of iteraton. 
    3.  then before returning the value of iteration, the inputString need to join, as you remember, we split by space the inputString before passing the loop         

*/