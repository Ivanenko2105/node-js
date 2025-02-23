document.getElementById('css-btn').addEventListener('click', function () {
	let blocks = document.getElementsByClassName('block');

	for (let block of blocks) {
		block.style.display = block.style.display == 'none' ? 'block' : 'none';
	}
});

document.getElementById('js-btn').addEventListener('click', function () {
	let blocks = document.getElementsByClassName('block');
	if (blocks.length !== 0) {
		while (blocks.length !== 0) {
			blocks[0].remove();
		}
	} else {
		for (let i = 0; i < 5; i++) {
			let newBlock = document.createElement('div');
			newBlock.classList.add('block');

			document
				.querySelector('.h-container.width-60')
				.insertAdjacentElement('afterbegin', newBlock);
		}
	}
});

document.getElementById('css-js-btn').addEventListener('click', function () {
	let blocks = document.getElementsByClassName('block');

	for (let block of blocks) {
		block.classList.toggle('hidden');
	}
});
