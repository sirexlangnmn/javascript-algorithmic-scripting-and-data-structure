/* 
    02.Find the Longest Word in a String
    Find the longest word in as String
    Ex: 'The quick brown fox jumped to a lazy dog.'
    Ex: 'What if we try a very long word such as otorhinolarynology.'

    BASIC SOLUTION
*/

function findTheLongestWord(inputString) {
    var words = inputString.split(' ');
    var maxLength = 0;
    
    for (var i = 0; i < words.length; i++) {
        if(words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

inputString1 = findTheLongestWord('The quick brown fox jumped to a lazy dog.');
inputString2 = findTheLongestWord('What if we try a very long word such as otorhinolarynology.');

console.log(inputString1); 
console.log(inputString2);


/* 
Explanation:
1.  Create a function with a parameter inputString. (Parameter can be named according to your desire)
2.  The passed value of inputString parameter will be split by space between of every word in the entire sentence (split is a string method).
3.  Now, after splitting the passed value of inputString parameter, it gives a value of an array.
4.  The array now will stored in the var words. Use console.log(words) to check what is the value stored after splitting.
5.  Declared another var, named maxLength and has a value of zero.
6.  Use for loop. Declared var i equals to zero, i is less than the length of stored value in var words, and increment of i every loop.
7.  Inside loop, there's a condition, if the length of stored value in var words is greater than to maxLength, it over write the old value of previous maxLength. 
    Every iteration, if the condition satisfy, it return the new value of maxLength and over write the old one.
8.  We can call the function by this: findTheLongestWord();
9.  If you would like to pass more value to function, you can use another variable like what I have done, InputString1 & InputString2
10. Then use console.log to print the output to the console.
*/