// The interface describes the information every user must have.
interface User {
  readonly id: number;
  username: string;
  password: string;
  email?: string;
}

// login accepts any object that follows the User shape.
function login(user: User): void {
  console.log(`Logging in ${user.username}`);
  if (user.email) {
    console.log(`Account email: ${user.email}`);
  }
}

// Email is optional, so both of these users are valid.
const userWithoutEmail: User = {
  id: 1,
  username: "amina",
  password: "safe-example-password",
};

const userWithEmail: User = {
  id: 2,
  username: "daniel",
  password: "another-example-password",
  email: "daniel@example.com",
};

login(userWithoutEmail);
login(userWithEmail);

// TypeScript reports an error here because id is readonly:
// userWithoutEmail.id = 3;
