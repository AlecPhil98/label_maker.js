"use strict"


function getMealCost(orders) {

    let sum = 0;
    let numOrders = orders.length;
    for (let i = 0; i < numOrders; i++) {

        sum += lunch[i].price;
    }

    return sum

}

let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];


let mealTotal = getMealCost(lunch);
let tax = mealTotal * (8/100);
let mealafteraTax = mealTotal + tax;
let tip = mealafteraTax *(18/100);
let totalDue = mealafteraTax + tip;




console.log(mealTotal.toFixed(2));
console.log(tax.toFixed(2));
console.log(mealafteraTax.toFixed(2));
console.log(totalDue.toFixed(2));

console.log(`This is the meal total $${mealTotal.toFixed(2)} 
with a tax of $${tax.toFixed(2)} brings it to $${mealafteraTax.toFixed(2)} 
with a tip of ${tip.toFixed(2)} it all comes out to $${totalDue.toFixed(2)}. ` )
