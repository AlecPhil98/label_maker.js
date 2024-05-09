"use strict"


// supplierCode:productNumber-size

// {
//     supplierCode: "someValue",
//     productNumber: "someValue",
//     size: "someValue"
//     }


//  let partCode1 = {

//   supplierCode: "XYZ",
//    productNumber: "1234",
//    size: "L"
//  }

let fun = "XYZ:1234-L";

function parsePartCode(partCode1) {

     let supplierCode = partCode1.substring(0,partCode1.indexOf(":"));



     let productCode = partCode1.substring(partCode1.indexOf(":") + 1,partCode1.indexOf("-"));


     let sizeCode = partCode1.substring(partCode1.indexOf("-") + 1);

     return {
          supplierCode: supplierCode,
          productCode: productCode,
          sizeCode: sizeCode
     }
}


let part1 = parsePartCode(fun);

console.log("Supplier: " + part1.supplierCode +
     " Product Number: " + part1.productCode +
     " Size: " + part1.sizeCode);


