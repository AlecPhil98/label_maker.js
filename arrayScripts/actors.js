"use strict"

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    }
];

let numActors = academyMembers.length
for (let i = 0; i < numActors; i++) {

    if (academyMembers[i].memID === 187) {
        console.log(`This is the member ID with ${academyMembers[i].name}`)
    }

    // let totalFilms = academyMembers[i].films
    if (academyMembers[i].films.length >= 3) {
        console.log(`These are the members with 3 or more films ${academyMembers[i].name}`)
    }
    if(academyMembers[i].name.indexOf("Bob") === 0){
        console.log(`These name starts with Bob: ${academyMembers[i].name}`)
    }
    let startsWithA = false 
    for (let i =0; i < numActors;i++){
        if(academyMembers[i].films.indexOf("A") === 0){

            startsWithA = true;
            break;
        }
        if(startsWithA){
        console.log(`${academyMembers[i].name} star in films with films that start with A
        }`)
        }
    }


  
}


// let totalFilms = 0;
// for(let j =0 ; j < academyMembers[i].films.length; j++){

//     totalFilms += academyMembers[i].films[j];

// }

// console.log(totalFilms)
