document.getElementById('green-text').addEventListener('focus', function () {
	document.getElementById('green-rectangle').classList.remove('hidden');
});

document.getElementById('green-text').addEventListener('input', function () {
	document.getElementById('green-rectangle').classList.add('hidden');
});
