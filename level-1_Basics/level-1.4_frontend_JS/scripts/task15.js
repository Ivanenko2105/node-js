document.getElementById('outer-div').addEventListener('click', function () {
	alert('outer div');
});

document
	.getElementById('inner-div')
	.addEventListener('click', function (event) {
		alert('inner div');
		event.stopPropagation();
	});
