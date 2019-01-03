/* 
    08.1 - Confirm - the - Ending
*/

function confirmEnding(inputString, target) {
    return inputString.substr(-target.length) === target;
}

console.log(confirmEnding('FederexPogi', 'Pogi'));