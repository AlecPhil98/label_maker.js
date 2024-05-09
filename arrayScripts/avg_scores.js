"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];


function getAverage(myScores) {

    let total = 0;

    for (let i = 0; i < myScores.length; i++) {

        total += myScores[i]

    }

    return total / myScores.length
}
function getAverage(yourScores) {

    let total = 0;

    for (let i = 0; i < yourScores.length; i++) {

        total += yourScores[i]

    }

    return total / yourScores.length
}




console.log(getAverage(myScores));

console.log(getAverage(yourScores));








// //testing below
// let myScores = [92, 98, 84, 76, 89, 99, 100];

// let sum = 0;

// for (let i = 0; i < myScores.length; i++) {
//     sum += myScores[i];


// }
// let avgMyscores = sum / myScores.length

// console.log(sum)
// console.log(avgMyscores)

