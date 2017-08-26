var c = null;

function init() {
	var canvas = document.createElement("canvas");
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
	document.body.appendChild(canvas);
	c = canvas.getContext("2d");
}

window.onload = function() {
	init();
	console.log(c);
}
