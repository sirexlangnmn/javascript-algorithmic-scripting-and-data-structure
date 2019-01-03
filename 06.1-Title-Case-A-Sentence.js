/* 

    06.1 - Title - Case - A - Sentence

    Capital all first letter
*/

//  A string is converted to lower case with toLowerCase():

//  The replace() method replaces a specified value with another value in a string:
//  The first argument pertaining to the starting position of what you want to replace.
//  THe second argument pertaining to the value that you want to replace.

//  The charAt() method returns the character at a given position in a string
//  charaAt(0) is pertaining to the first letter/element of the string

//  A string is converted to upper case with toUpperCase():

// I don't really get how to use this String.prototype 
String.prototype.replaceAt = function(index, character) {   // replaceAt can be modify what ever I want
    return this.substr(0, index) + character + this.substr(index + character.length);
    //console.log(this.substr(0, index)); //    di ko ito gets
    //console.log(character); //  get the first letter of all word
    //console.log(this.substr(index + character.length)); //    get all letter except the first letter of every word
};

function titleCase(inputString) {
    var newTitle = inputString.split(' ');
    var updatedTitle = [];

    for(var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
}


input1 = titleCase('The little tea pot');
input2 = titleCase('Life of the programmer');

console.log(titleCase('The little tea pot'));
console.log(titleCase('Life of the programmer'));




