/* 
    02.Find the Longest Word in a String
    Find the longest word in as String
    Ex: 'The quick brown fox jumped to a lazy dog.'
    Ex: 'What if we try a very long word such as otorhinolarynology.'

    INTERMEDIATE SOLUTION
*/

function findTheLongestWord(inputString) {
    /* return inputString.split(' ').reduce(); */
    return inputString.split(' ').reduce(function(x, y) {
        return Math.max(x, y.length);
    }, 0);    
}

inputString1 = findTheLongestWord('The quick brown fox jumped to a lazy dog.');
inputString2 = findTheLongestWord('What if we try a very long word such as otorhinolarynology.');

console.log(inputString1); 
console.log(inputString2);


/* 
Explanation:

*/