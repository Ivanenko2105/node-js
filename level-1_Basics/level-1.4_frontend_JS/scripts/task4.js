document.getElementById('text-btn').addEventListener('click', function () {
	let cssSelector = document.getElementById('text-input').value;

	let elements = document.querySelectorAll(cssSelector);

	for (let element of elements) {
		element.classList.toggle('hidden');
	}
});
