import analyze from '../functions/array-analysis';

test('Return object with correct properties', () => {
	expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
