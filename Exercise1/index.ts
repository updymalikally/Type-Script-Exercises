// Exercise 1: Create variables with different types

let productName: string = "Notebook";
let price: number = 12.99;
let discountAvailable: boolean = true;

// These are wrong because the values do not match the variable types

// productName = 123;
// price = "twelve dollars";
// discountAvailable = "yes";

// Changing the variables to new values with the correct types

productName = "Pencil";
price = 1.5;
discountAvailable = false;


// Exercise 2: Calculate the price after the discount

function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}


// Exercise 3: Check the length without causing an error

function printLength(x: unknown): void {
  if (typeof x === "string") {
    console.log(x.length);
  } else {
    console.log("This value is not a string.");
  }
}

// This works because "Hello" is a string
printLength("Hello");

// This does not crash because we check the type first
printLength(123);
