const assert = require('assert');
const checkForSum = require('./src/sumOfOther');
const make = require('./src/make')

const sum1 = [1,2,3,4,5];
const sum2 = [1,11,24,4,7,12];
const sum3 = [101,27,135,415,2,37,41];

function sum(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;	
}

describe('sumOfOther', () => {
	it('1', () => {
		const sum = checkForSum(sum1);
		assert.deepEqual(sum, [14, 13, 12, 11, 10])
	});

	it('2', () => {
		const sum = checkForSum(sum2);
		assert.deepEqual(sum, [58, 48, 35, 55, 52, 47])
	});

	it('3', () => {
		const sum = checkForSum(sum3);
		assert.deepEqual(sum, [657, 731, 623, 343, 756, 721, 717])
	});
});

describe('make', () => {
	it('1', () => {
		const result = make(15)(34, 21, 666)(41)(sum);
		assert.equal(result, 777);
	});

	it('2', () => {
		const result = make(11, 5)(20, 1)(41)(3,5)(multiply);
		assert.equal(result, 676500);
	});
});