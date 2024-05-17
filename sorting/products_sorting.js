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


//our compare fucntion in that is aware of the Title field  we want to sort on 
function compareFnForObjectProperties(a, b) {
  if (a.product < b.product) {
    return -1;
  } else if (b.product > a.product) {
    return 1;
  }
  // a must be equal to b
  return 0;
}


//by name 
console.log(compareFnForObjectProperties)
console.log(products.sort(compareFnForObjectProperties))
console.log(`--------------------------------------------------`)
//by price
function compareFnForObjectPropertiesPrice(a, b) {
  if (a.price < b.price) {
    return -1;
  } else if (b.price > a.price) {

  }
  return 0
}

console.log(compareFnForObjectPropertiesPrice)
console.log(products.sort(compareFnForObjectPropertiesPrice))