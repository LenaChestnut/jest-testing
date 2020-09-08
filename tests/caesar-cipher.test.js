import caesar from '../functions/caesar-cipher';

test('Ciphered text is returned', () => {
	expect(caesar('BILL IS WATCHING', 3)).toBe('ELOO LV ZDWFKLQJ');
});

test('Text wraps from Z to A', () => {
	expect(caesar('WELCOME TO GRAVITY FALLS', 3)).toBe(
		'ZHOFRPH WR JUDYLWB IDOOV'
	);
});

test('Character case persists', () => {
	expect(caesar('Hello World', 2)).toBe('Jgnnq Yqtnf');
});

test('Punctuation persists', () => {
	expect(caesar('Panic! At The Disco', 4)).toBe('Termg! Ex Xli Hmwgs');
});
