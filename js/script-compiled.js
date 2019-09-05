'use strict';

var _console;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

console.log('19.4 zadanie 1:');
var firstWord = 'Hello';
var secondWord = 'World';
var greeting = [firstWord, secondWord];
var rest2 = greeting.slice(0);

(_console = console).log.apply(_console, _toConsumableArray(rest2));

console.log('');
console.log('19.4 zadanie 2:');
var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log(a * b);
};
multiply(177);
multiply(177, 177);

console.log('');
console.log('19.4 zadanie 3:');
var average = function average() {
  for (var _len = arguments.length, array = Array(_len), _key = 0; _key < _len; _key++) {
    array[_key] = arguments[_key];
  }

  var sum = 0;
  array.forEach(function (el) {
    return sum = sum + el;
  });
  console.log(sum / array.length);
};
average(100, 300, 500, 700, 900, 1000);

console.log('');
console.log('19.4 zadanie 4:');
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

console.log('');
console.log('19.4 zadanie 5:');
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = data[2],
    lastname = data[4];

console.log(firstname + ' ' + lastname);
