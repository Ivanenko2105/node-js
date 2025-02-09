const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const filePath = path.join(__dirname, 'saves.txt');

app.use((req, res) => {
	if (!fs.existsSync(filePath)) {
		fs.writeFileSync(filePath, '', 'utf8'); // Создает пустой файл
	}

	const data = Object.fromEntries(
		fs
			.readFileSync(filePath, 'utf8')
			.split('\n')
			.map(entry => entry.split(':'))
	);

	data[req.path] = 1 + (req.path in data ? +data[req.path] : 0);

	const stringData = Object.entries(data)
		.map(entry => entry.join(':'))
		.join('\n');

	fs.writeFileSync(filePath, stringData, 'utf8');

	res.send(data[req.path].toString());
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
