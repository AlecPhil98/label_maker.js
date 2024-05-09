"use Strict"

let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];


function getStudentsName() {

    let numStudents = students.length;
    for (let i = 0; i < numStudents; i++) {

        console.log(students[i].name);

        let total = 0;

        for (let j = 0; j < students[i].scores.length; j++) {


            total += students[i].scores[j];
            // console.log(students[i].scores[j])
            //  console.log(total)
            //  console.log(total/students[i].scores.length)
        }
        console.log(total/students[i].scores.length)
    }
    
    
    

}

getStudentsName();





// function getAverage() {

//     let total = 0;

//     for (let i = 0; i < students.length; i++) {

//         total += students[i];
//          console.log(students[i].scores[i])

//     }

//     return total / students.length
// }
