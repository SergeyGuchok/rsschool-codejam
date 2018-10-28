const assert = require('assert');
const checkForSum = require('./src/sumOfOther');

const test1 = [1,2,3,4,5];
const test2 = [1,11,24,4,7,12];
const test3 = [101,27,135,415,2,37,41];

describe('sumOfOther', () => {
	it('1', () => {
		const sum = checkForSum(test1);
		assert.deepEqual(sum, [14, 13, 12, 11, 10])
	});

	it('2', () => {
		const sum = checkForSum(test2);
		assert.deepEqual(sum, [58, 48, 35, 55, 52, 47])
	});

	it('3', () => {
		const sum = checkForSum(test3);
		assert.deepEqual(sum, [657, 731, 623, 343, 756, 721, 717])
	});
});