import reverseStr from '../functions/reverseStr';

test('Reverse string', () => {
	expect(reverseStr('Hello, World')).toBe('dlroW ,olleH');
});
