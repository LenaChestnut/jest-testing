function caesar(str, shift) {
	const splitStr = str.split('');
	const code = splitStr
		.map((char) => {
			if (char.match(/[a-zA-Z]/)) {
				return getCodedChar(char, shift);
			}
			return char;
		})
		.join('');
	return code;
}

function getCodedChar(char, shift) {
	const code = char.charCodeAt(0);
	let newCode;

	if (code >= 65 && code <= 90) {
		newCode = ((code - 65 + shift) % 26) + 65;
	} else if (code >= 97 && code <= 122) {
		newCode = ((code - 97 + shift) % 26) + 97;
	}

	return String.fromCharCode(newCode);
}

export default caesar;
