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
	const getBadRequest = function () {
		return [400, 'Bad Request', 'bad request'];
	};

	const getNotFound = function () {
		return [404, 'Not Found', 'not found'];
	};

	const getUnauthorized = function () {
		return [401, 'Unauthorized', 'unauthorized'];
	};

	const getUnsupportedMediaType = function () {
		return [415, 'Unsupported Media Type', 'unsupported media type'];
	};

	const getInternalServerError = function () {
		return [500, 'Internal Server Error', 'internal server error'];
	};

	const expectedUri = '/api/checkLoginAndPassword';
	const expectedContentType = 'application/x-www-form-urlencoded';
	const passwordsFileName =
		'.\\level-1_Basics\\level-1.2_HTTP_and_WEB\\passwords.txt';

	let statusCode;
	let statusMessage;
	let body;
	let passwords;

	let [login, password] = $body
		.split('&')
		.map(data => data.split('=')[1].trim());

	if ($method != 'POST') {
		[statusCode, statusMessage, body] = getBadRequest();
	} else if ($uri != expectedUri) {
		[statusCode, statusMessage, body] = getNotFound();
	} else if ($headers['Content-Type'] != expectedContentType) {
		[statusCode, statusMessage, body] = getUnsupportedMediaType();
	} else {
		try {
			passwords = require('fs').readFileSync(passwordsFileName, 'utf8');
			passwords = Object.fromEntries(
				passwords.split('\r\n').map(line => line.split(':'))
			);

			if (passwords[login] == password) {
				statusCode = 200;
				statusMessage = 'OK';
				body = `<h1 style="color:green">FOUND</h1>`;
			} else {
				[statusCode, statusMessage, body] = getUnauthorized();
			}
		} catch (error) {
			[statusCode, statusMessage, body] = getInternalServerError();
		}
	}

	const headers = {
		// Date: new Date().toLocaleString(),
		Server: 'Apache/2.2.14 (Win32)',
		'Content-Length': body.length,
		Connection: 'Closed',
		'Content-Type': 'text/html; charset=utf-8',
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

let contents = readHttpLikeInput();

let http = parseTcpStringAsHttpRequest(contents);
processHttpRequest(http.method, http.uri, http.headers, http.body);
