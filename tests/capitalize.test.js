import capitalize from '../functions/capitalize';

test('capitalize first character of the string', () => {
	expect(capitalize('melancholy kaleidoscope')).toBe(
		'Melancholy kaleidoscope'
	);
});
