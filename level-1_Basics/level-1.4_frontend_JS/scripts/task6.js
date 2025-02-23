document.getElementById('red-btn').addEventListener('mouseover', function () {
	document.getElementById('red-square').classList.add('hidden');
});

document.getElementById('red-btn').addEventListener('mouseout', function () {
	document.getElementById('red-square').classList.remove('hidden');
});
