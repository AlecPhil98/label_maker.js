"use strict"


let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Kit Kat", price: 4.56 },
    { product: "Skittles", price: 3.79 },
    { product: "Snickers", price: 2.89 },
    { product: "Twix", price: 5.56 },
    { product: "Sour Patch Kids", price: 2.79 },
    { product: "Butterfingers", price: 6.79 },

];
// Which candies costs less than $4.00?
// Which candies has "M&M" its name?
// Do we carry "Swedish Fish"?
// TODO:
////fill the array with 10 candies of various

let numberOfCandy = products.length
for (let i = 0; i < numberOfCandy; i++) {

    if (products[i].price < 4.00) {
        console.log(`Here are the candies that are less than $4.00 ${products[i].product}`);
    }
    let indexM = products[i].product.indexOf("M&Ms")
    if( indexM != -1){
        console.log(`This product ${products[i].product}  has M&Ms in its name`)
    }
    if(products[i].product === "Swedish Fish"){
        console.log(`This product carries ${products[i].product}`)
    }

}