'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');
const Symbol = require('./shared/Symbol');
const args = require('./shared/arguments');
const genFunc = require('./shared/genFunc');

describe('isNotGeneratorFunction', function() {
  it('tests a value for complement of `Generator Function`', function() {
    eq(RA.isNotGeneratorFunction(genFunc), typeof genFunc !== 'function');
    eq(RA.isNotGeneratorFunction(args), true);
    eq(RA.isNotGeneratorFunction([1, 2, 3]), true);
    eq(RA.isNotGeneratorFunction(true), true);
    eq(RA.isNotGeneratorFunction(new Date()), true);
    eq(RA.isNotGeneratorFunction(new Error()), true);
    eq(RA.isNotGeneratorFunction(Array.prototype.slice), true);
    eq(RA.isNotGeneratorFunction({ 0: 1, length: 1 }), true);
    eq(RA.isNotGeneratorFunction(1), true);
    eq(RA.isNotGeneratorFunction(/x/), true);
    eq(RA.isNotGeneratorFunction(Symbol), true);
  });
});
