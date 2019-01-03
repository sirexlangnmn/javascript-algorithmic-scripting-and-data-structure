/* 
    05 - Check -for-Palindromes     

    This is a word or phrase that will reverse spells the same thing forward or backward
    Ex: racecar, eye

    Once we determined whether it is a palindrome or not we want to return either true or false

*/


function palindrome(input) {
    // assign a front and back pointer
    let front = 0;
    let back = input.length - 1;


    // back and front pointers won't always meet in the middle, so use (back > fornt)
    while (back > front) {
        // increments front pointer if current character doesn't meet creteria
        while (input[front].match(/[\W_]/)) {
            front++;
            continue
        }

        // decrements back pointer if current character doesn't meet criteria
        while (input[back].match(/[\W_]/)) {
            back--;
            continue
        }
        
        //finally do the comparison on the current character
        if (input[front].toLowerCase() !== input[back].toLowerCase())
        return false;

        front++;
        back--;
    }

    //  if the whole string has been compared without returning false, it's a palindrome.
    return true;

}


input1 = palindrome('eye');
input2 = palindrome('racecar');
input3 = palindrome('federex');

console.log(input1);
console.log(input2);
console.log(input3);
