let firstName;
function capitalize(firstName) {
  const firstLetterCapital = firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();
  return firstLetterCapital;
}

console.log(capitalize("CAROLINE"));
console.log(capitalize("peter"));
console.log(capitalize("maximulious"));
console.log(capitalize("klauS"));
