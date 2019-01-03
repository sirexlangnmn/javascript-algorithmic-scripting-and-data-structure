/* 
    02.Find the Longest Word in a String
    Find the longest word in as String
    Ex: 'The quick brown fox jumped to a lazy dog.'
    Ex: 'What if we try a very long word such as otorhinolarynology.'

    ADVANCE SOLUTION
*/

function findTheLongestWord(inputString) {
    inputString = inputString.split(' ');
    console.log(inputString);

    if (inputString.length == 1) {
        return inputString[0].length;
    }

    if (inputString[0].length >= inputString[1].length) {
        inputString.splice(1, 1);
        return findTheLongestWord(inputString.join(' '));
    }

    if (inputString[0].length <= inputString[1].length) {
        return findTheLongestWord(inputString.slice(1, inputString.length).join(' '));

    }

    return inputString.length;
}

inputString1 = findTheLongestWord('The quick brown fox jumped to a lazy dog.');
inputString2 = findTheLongestWord('What if we try a very long word such as otorhinolarynology.');

console.log(inputString1);
console.log(inputString2);


/* 
Explanation:

*/