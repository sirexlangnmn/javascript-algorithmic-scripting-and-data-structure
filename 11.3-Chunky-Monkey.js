/* 
    11.3-Chunky-Monkey
*/



/* 
    1. input (['a', 'b', 'c', 'd'], 2)           output [['a', 'b'], ['c', 'd']] 
    2. input ([0, 1, 2, 3, 4, 5], 3) output [[0, 1, 2], [3, 4, 5]]
    3. input ([0, 1, 2, 3, 4, 5], 2) output [[1, 2 ], [2, 3], [4, 5]]
    4. input ([0, 1, 2, 3, 4, 5], 4) output [[0, 1, 2, 3], [4, 5]]
*/


function chunkArrayInGroups(inputArray, inputSize) {
    var platoon, arrLeng, i;

    platoon = [];

    arrLeng = inputArray.length;
    i = 0; 
    while (i < arrLeng) {
        platoon.push(inputArray.slice(i, i + inputSize));
        i += inputSize
    }

    return platoon;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

console.log(chunkArrayInGroups([
    'Rex',
    'Yamson',
    'Brian',
    'Dan',
    'Kien',
    'Alvin',
    'Dexter',
    'Mark',
    'Joseph',
    'OJ',
    'Joyce',
    'Eunice',
    'Mara',
    'Eunikka',
    'Joan',
    'Kit',
    'Josephine',
    'Ara',
    'Aya',
    'Aira'], 5));


