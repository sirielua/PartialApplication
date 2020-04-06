'use strict';

const power = Math.pow;
const square = val => power(val, 2);
const cube = power.bind(null, 3);

module.exports = { power, square, cube };
