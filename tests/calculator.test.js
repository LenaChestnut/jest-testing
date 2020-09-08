import calculator from '../functions/calculator';

test('Add two numbers', () => {
	expect(calculator.add(34, 4)).toEqual(38);
});

test('Subtract numbers', () => {
	expect(calculator.subtract(43, 11)).toEqual(32);
});

test('Divide numbers', () => {
	expect(calculator.divide(24, 8)).toEqual(3);
});

test('Multiply numbers', () => {
	expect(calculator.multiply(12, 5)).toEqual(60);
});
