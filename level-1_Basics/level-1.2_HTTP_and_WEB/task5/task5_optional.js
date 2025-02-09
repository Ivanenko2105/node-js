const fs = require('fs');
const path = require('path');

function readHttpLikeInput() {
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

function outputHttpResponse(statusCode, statusMessage, headers, body) {
	const httpVersion = 'HTTP/1.1';
	const statusLine = `${httpVersion} ${statusCode} ${statusMessage}`;
	const headerLines = Object.entries(headers)
		.map(entry => `${entry[0]}: ${entry[1]}`)
		.join('\n');
	let response = statusLine + '\n' + headerLines + '\n\n' + body;
	console.log(response);
}

/**
 *
 * @param {String} $method
 * @param {String} $uri
 * @param {Object} $headers
 * @param {String} $body
 */
function processHttpRequest($method, $uri, $headers, $body) {
	let statusCode;
	let statusMessage;
	let body;
	$uri = $uri == '/' ? '/index.html' : $uri;

	let baseFolder = $headers['Host'].startsWith('student.shpp.me')
		? '/student'
		: $headers['Host'].startsWith('another.shpp.me')
		? '/another'
		: 'else';

	filePath = path.join(__dirname, baseFolder, $uri);

	try {
		body = fs.readFileSync(filePath, 'utf8');
		[statusCode, statusMessage] = [200, 'OK'];
	} catch (error) {
		[statusCode, statusMessage] = [404, 'Not Found'];
		body = statusMessage.toLowerCase();
	}

	const headers = {
		Date: new Date().toLocaleString(),
		Server: 'Apache/2.2.14 (Win32)',
		Connection: 'Closed',
		'Content-Type': 'text/html; charset=utf-8',
		'Content-Length': body.length,
	};

	outputHttpResponse(statusCode, statusMessage, headers, body);
}

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

// let contents = readHttpLikeInput();
let contents = `GET /hello.html HTTP/1.1
Host: another.shpp.me
Accept: image/gif, image/jpeg, */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0

`;

let http = parseTcpStringAsHttpRequest(contents);
processHttpRequest(http.method, http.uri, http.headers, http.body);
