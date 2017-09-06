function playlist_add_track(evt) {
alert("HI");
}

window.onload = function() {
	document.getElementById("playList").addEventListener("ondrop", playlist_add_track);
}
