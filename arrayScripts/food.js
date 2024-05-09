"use strict"

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];
    
    let sum = 0;
    
    for(let i = 0;i<lunch.length;i++){

        sum +=lunch[i]
    }

    console.log(sum)