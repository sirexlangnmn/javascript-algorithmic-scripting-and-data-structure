/* 
    03.Reverse-a-String
    
    INTERMEDIATE SOLUTION (Another Solution)
*/


function reverseString(inputString) {
    var outputReverseString = '';
    inputString.split('');

    for (var i = 0; i < inputString.length; i++) {
        outputReverseString += inputString[i];

        //  console.log(outputReverseString);   // it show how the loop happen  
    }
    return outputReverseString;
}

string1 = reverseString('Hello World');
string2 = reverseString('Hello Federex');
string3 = reverseString('Greetings to the world!');

console.log(string1);
console.log(string2);
console.log(string3);



/* 
Explanation:
    1.  Declare a variable to be container of the new value after processing the string in the loop. 
        In this case, the var outputReverseString, and declare a blank value.

    2.  For loop. var i = sa length of the string minus one. Because it should be the starting point is zero.
        if higher than zero, lalaktawan nya yung ibang letters
        if lower than zero, hahanapin nya yung letter na wala sa string, so undefined ang output nun.         

    3.  Habang nag loop sya ng decrement, nababawasan yun orignal string then na over write yung value ng previous var outputReverseString.  
        Until matapos yung loop, mai-store sa var outputReverseString yun reverse na inputString 

*/