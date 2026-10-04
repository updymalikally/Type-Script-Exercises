// Exercise 1: Make some lists

const names: string[] = ["Maya", "Daniel"];

const grades: number[] = [88, 94, 76];

const statuss: boolean[] = [true, false, true];

// These are wrong because the types are different

// names.push(42);

// grades.push("A");

// statuss.push("passed");


// Exercise 2: Make a list of products

const products: string[] = ["Phone", "Laptop"];

// We cannot add a number to a string list

// products.push(99);


// Exercise 3: Make a tuple

const location1: [string, number, number] = ["Nairobi", -1.2921, 36.8219];

// First is the city, second is latitude, third is longitude

const anotherLocation: [string, number, number] = ["Mombasa", -4.0435, 39.6682];

// These are wrong because the order is not correct

// const swappedCoordinates: [string, number, number] = ["Nairobi", 36.8219, -1.2921];

// const cityInWrongPosition: [string, number, number] = [-1.2921, "Nairobi", 36.8219];
