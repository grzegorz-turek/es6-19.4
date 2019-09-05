console.log(`19.4 zadanie 1:`);
const firstWord = 'Hello';
const secondWord = 'World';
const greeting = [firstWord, secondWord];
const [...rest2] = greeting;
console.log(...rest2);

console.log('');
console.log(`19.4 zadanie 2:`);
const multiply = (a = 1, b = 1) => console.log(a * b);
multiply(177);
multiply(177, 177);

console.log('');
console.log(`19.4 zadanie 3:`);
const average = (...array) => {
  let sum = 0;
  array.forEach(el => sum = sum + el);
  console.log(sum / array.length);
}
average(100, 300, 500, 700, 900, 1000);


console.log('');
console.log(`19.4 zadanie 4:`);
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);


console.log('');
console.log(`19.4 zadanie 5:`);
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = data;
console.log(`${firstname} ${lastname}`);