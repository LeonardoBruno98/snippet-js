$('#container').on('click', function () {
	//event launched on click on the container
	//same as .bind('click', ...)
});
$('#container').on('click', 'a', function () {
	//event launched on click on an internal link
	//same as .delegate('a', 'click', ...)
});
