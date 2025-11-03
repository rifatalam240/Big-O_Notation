const arr = [1, 3, 4, , 5, 7];
const hasEvenNumbers = arr.some((num) => num % 2 === 0);
console.log("Array has even numbers:", hasEvenNumbers);

const currentUserRoles = ["admin", "editor", "subscriber"];
const futureaccessRoles = ["editor", "contributor"];
const canaccess = currentUserRoles.some((role) =>
  futureaccessRoles.includes(role)
);
console.log("User can access:", canaccess);
