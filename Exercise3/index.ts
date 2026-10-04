// Exercise 1: Both parts of the name are text, and the result is text too.
function fullName(first: string, last: string): string {
  return `${first} ${last}`;
}

console.log(fullName("Amina", "Otieno"));

// Exercise 2: isAdmin is optional; language uses "en" when it is left out.
function registerUser(
  username: string,
  isAdmin?: boolean,
  language: string = "en",
): void {
  console.log({ username, isAdmin, language });
}

registerUser("amina");
registerUser("daniel", true, "sw");

// Exercise 3: Rest parameters let the function receive any number of scores.
function average(...scores: number[]): number {
  if (scores.length === 0) {
    return 0;
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

// Try a few scores; this prints 84.
console.log(average(78, 85, 91, 82));
