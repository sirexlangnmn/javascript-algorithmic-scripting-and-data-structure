/* 

    06.2 - Title - Case - A - Sentence

*/


function titleCase(inputString) {
    var convertedToArray = inputString.toLowerCase().split(' ');
    
    var updateString = convertedToArray.map(function(current) {
        return current.replace(current.charAt(0), current.charAt(0).toUpperCase());
        //console.log(current.replace(current.charAt(0), current.charAt(0).toLowerCase()));
    });

    return updateString.join(' ');
}


input1 = titleCase('The little tea pot');
input2 = titleCase('Life of the programmer');

console.log(input1);
console.log(input2);


/* 
Eplanation 
    1.  inputString convert into lower case then split by spaces. 
        Note: Be careful on spliting the inputString, if you split it by characters and don't split by spaces
        the final output will be all upper case.
        Then the value now stored in the var convertedToArray
    
    2.  since the value of our var now is an array, we will use the map loop to get the current element of the array.

    3.  Every iteration, the current element will be processed by replace method. 
        The first argument pertaining to the starting point where of the string that you want to replace
        The second argument pertaining to how many element of the string that you want to change

    4.  The charAt() method returns the character at a specified index (position) in a string:
        Example: Hello.. then the chartAt(0) is pertaining to the H. charAt(1) is e, so on in so forth.
            
    5.  charAt is used in in the replace method to pinpoint or specified the index (position) of the string that they want to chane in to uppercase.

    6. Then every iteration, it return a value and join it together (Remember, we split the inputString in the beginning)

*/