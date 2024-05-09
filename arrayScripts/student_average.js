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

    }

}
function getAverage() {

    let total = 0;
    
    for (let i = 0; i < students.length; i++) {

        total += students[i].scores;
        console.log(students[i].scores)
        
    }

      return total / students.length
}

getStudentsName(students);
getAverage(students);