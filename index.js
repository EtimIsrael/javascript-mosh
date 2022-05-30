console.log('Hello World');

//JS object
let person = {
  name: 'Israel',
  age: 30
};

console.log(person);

// DOt Notation
person.name = 'John';

// Bracket Notation
person ['name'] = 'Mary';

console.log(person.name);

let selection = 'name';
person[selection] = 'Effiong';

console.log(person.name);

let selectedColor = ['red', 'blue'];
selectedColor[2] = 'green';
selectedColor[3] = 1;
console.log(selectedColor);

// Performing a task
function greet() {
  console.log('Hello World');
}
greet();

function gret(nama) {
  console.log('Hello ' + nama);
}
gret('John');
gret('Mary');

function grit(nam, lastName) {
  console.log('Hello ' + nam + ' ' + lastName)
}
grit('John');
grit('Mary');
grit('Mary', 'Effiong');
grit('John', 'Shaft');

// Calculate a value
function square(number) {
  return number * number;
}
console.log(square(2));