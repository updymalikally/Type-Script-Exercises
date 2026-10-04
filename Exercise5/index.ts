// echo gives back the same value and keeps its original type for autocomplete.
function echo<T>(input: T): T {
  return input;
}

const greeting = echo("Hello, TypeScript!");
const quantity = echo(12);
const colors = echo(["blue", "green", "gold"]);
const member = echo({ id: 7, name: "Leah" });

// TypeScript knows greeting is a string, quantity is a number,
// colors is a string array, and member has id and name properties.
console.log(greeting, quantity, colors, member.name);

// ApiResult pairs a status message with data of whatever type we need.
interface ApiResult<T> {
  status: string;
  data: T;
}

const messageResult: ApiResult<string> = {
  status: "success",
  data: "Your profile is ready.",
};

const userResult: ApiResult<{ id: number; name: string }> = {
  status: "success",
  data: { id: 42, name: "Leah" },
};

console.log(messageResult.data, userResult.data.name);

// first returns an item with the same type as the items in the array.
function first<T>(items: T[]): T {
  return items[0];
}

const firstNumber = first([10, 20, 30]);
const firstName = first(["Leah", "Noah", "Maya"]);
const firstBook = first([
  { title: "The Hobbit", pages: 310 },
  { title: "A Wizard of Earthsea", pages: 205 },
]);

// Each result keeps its useful type: number, string, and the book object shape.
console.log(firstNumber, firstName, firstBook.title);
