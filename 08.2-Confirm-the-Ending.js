/* 
    08.2 - Confirm - the - Ending 
*/


function confirmEnding(inputString, target) {
    if (inputString.substr(inputString.length - target.length, inputString.length) === target ) {
        return true;
    } else {
        return false;
    }
}

console.log(confirmEnding('FederexPogi', 'Pogi'));