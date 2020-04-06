'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Impement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
//
// For hint use https://github.com/HowProgrammingWorks/Cheatsheet

const press = char => ({
  input: [char],
  press(char) {
    this.input.push(char);
    if (this.input.length >= 4) {
      return checkPin(...this.input);
    } else {
      return this;
    }
  },
});

console.log(checkPin);
console.log(press('3').press('4').press('5').press('6'));
console.log(press('4').press('9').press('6').press('7'));


module.exports = { press };
