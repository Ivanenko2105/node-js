function readHttpLikeInput() {
	var fs = require('fs');
	var res = '';
	var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
	let was10 = 0;
	for (;;) {
		try {
			fs.readSync(0 /*stdin fd*/, buffer, 0, 1);
		} catch (e) {
			break; /* windows */
		}
		if (buffer[0] === 10 || buffer[0] === 13) {
			if (was10 > 10) break;
			was10++;
		} else was10 = 0;
		res += new String(buffer);
	}

	return res;
}

/**
 *
 * @param {String} string
 */
// ось цю функцію, власне, і треба написати
function parseTcpStringAsHttpRequest(string) {
	const [head, body] = string.split(/\r?\n\r?\n/);
	const headLines = head.split('\n');
	const headerLines = headLines.slice(1);
	const startLine = headLines[0];
	const headers = Object.fromEntries(
		headerLines.map(line => {
			let [headerName, headerValue] = line.split(': ');
			headerName = headerName
				.split('-')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
				.join('-');
			return [headerName, headerValue];
		})
	);
	const [method, uri] = startLine.split(' ');

	return {
		method,
		uri,
		headers: headers,
		body: body,
	};
}

let contents = readHttpLikeInput();

let http = parseTcpStringAsHttpRequest(contents);
console.log(JSON.stringify(http, undefined, 2));
