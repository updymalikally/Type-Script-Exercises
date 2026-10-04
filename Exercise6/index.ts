// The enum gives each role a clear name we can use throughout the app.
enum UserRole {
  Superadmin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer",
}

// Only viewers are prevented from editing.
function canEdit(role: UserRole): boolean {
  return role !== UserRole.Viewer;
}

console.log(canEdit(UserRole.Superadmin)); // true
console.log(canEdit(UserRole.Moderator)); // true
console.log(canEdit(UserRole.Viewer)); // false

// Tell TypeScript to treat the selected element as a button so that
// the disabled property is available. Make sure the page has a button
// with this selector before running the code.
const button = document.querySelector("button") as HTMLButtonElement;
button.disabled = true;



echo "# Type-Script-Exercises" >> README.md
git init
git add .
git commit -m "Submitted"
git branch -M main
git remote add origin https://github.com/updymalikally/Type-Script-Exercises.git
git push -u origin main