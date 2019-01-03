/* 

    06.3 - Title - Case - A - Sentence

*/


function titleCase(inputString) {
    return inputString.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase())
}


input1 = titleCase('The little tea pot');
input2 = titleCase('Life of the programmer');

console.log(input1);
console.log(input2);
