var Game = {
	config: {
		cellSize: "20",
		rows: 2,
		board: 'inkSpillBoard',
		colors: {
			fill: function() {
				var palette = Game.config.colors.palette;
				var paletteLen = palette.length;
				return palette[parseInt(Math.random() * paletteLen)];
			},
			palette: [
				{
					code: "#ff0000",
					name: "red"
				},
				{
					code: "#00ff00",
					name: "green"
				},
				{
					code: "#0000ff",
					name: "blue"
				},
			]
		},
		reloadBtn: {
			id: "reloadInkSpill"
		}
	},
	reload: function() {
		document.getElementById(Game.config.board).innerHTML = "";
		Game.load();
	},
	attachButtonListeners: function() {
		document.getElementById(Game.config.reloadBtn.id).addEventListener("click", function() {
			Game.reload();
		});
	},
	init: function() {
		Game.attachButtonListeners();
		for(i in Game.config.colors.palette) {
alert(i)
			node = document.createElement("span");
			node.id = Game.config.colors.palette[i].name;
			node.style.backgroundColor = Game.config.colors.palette[i].code;
			node.addEventListener("click", function() {
				alert(this.id);
			});
			document.querySelector("#colorButtons").appendChild(node);
		}
		Game.load();
	},
	load: function() {
		config = Game.config;
		document.getElementById(Game.config.board).style.width = ((config.cellSize * config.rows) + config.rows) + "px"; 
		for(row = 1; row <= config.rows; row++) {
			for(col = 1; col <= config.rows; col++) {
				var node = document.createElement("span");
				var color = config.colors.fill();
				node.style.backgroundColor = color.code;
				node.className = color.name;
				document.getElementById(Game.config.board).appendChild(node);
			}
		}
	}
}

window.onload = function() {
	Game.init();
}
