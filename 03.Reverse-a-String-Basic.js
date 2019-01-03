/* 
    03.Reverse-a-String-Basic
    
    BASIC SOLUTION
*/

function reverseString(inputString) {
    
    inputString = inputString.split('');
    inputString = inputString.reverse('');
    inputString = inputString.join('');
    
    return inputString;
}

string1 = reverseString('Hello World');
string2 = reverseString('Hello Federex');
string3 = reverseString('Greetings to the world!');

console.log(string1);
console.log(string2);
console.log(string3);

/* 
Explanation:

    1.  Every string splited and make it as individual element and convert into an array. Then stored the value into inputString
    2.  Then the previous var inputString well be reverse. And then over write the old var inputString
    3.  Then the var inputString with the value of reverse array will be now join and back to the original string, no longer in the array form.

*/