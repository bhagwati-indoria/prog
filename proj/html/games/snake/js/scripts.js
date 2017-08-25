//Browser Capability Test
if(!window.requestAnimationFrame) {
	alert("requestAnimationFrame() is not supported by browser");
}
if(!window.cancelAnimationFrame) {
	alert("cancelAnimationFrame() is not supported by browser");
}

/*********** Game ***********/
//Constants
UP = 0; RIGHT = 1; DOWN = 2; LEFT = 3;
EMPTY = 0; FOOD = 1; SNAKE = 2;
KEY_LEFT = 37; KEY_UP = 38; KEY_RIGHT = 39; KEY_DOWN = 40;

//Config
rows = 25; cols = 25; cellSize = 20;

//Game datastructures
board = {
	_board: null,
	init: function(val) {
		this._board = [];
		for(i = 0; i < rows; i++) {
			this._board.push([]);
			for(j = 0; j < cols; j++) {
				this._board[i].push(val);
			}
		}
	},
	set: function(val, r, c) {
		this._board[r][c] = val;
	},
	get: function(r, c) {
		return this._board[r][c];
	}
}

snake = {
	_snake: null,
	direction: null,
	last: null,
	init: function(direction, x, y) {
		this._snake = [];
		this.direction = direction;
		this.insert(x, y);
	},
	insert: function(r, c) {
		this._snake.unshift({x: c, y: r});
		this.last = this._snake[0];
	},
	remove: function() {
		return this._snake.pop();
	}
}

food = {
	set: function() {
		var empty = [];
		for(i = 0; i < rows; i++) {
			for(j = 0; j < cols; j++) {
				if(board.get(i, j) === EMPTY) {
					empty.push({x: i, y: j});
				}
			}
		}
		var randPos = Math.floor(Math.random() * empty.length);
		board.set(FOOD, empty[randPos].x, empty[randPos].y);
	}
}
//Game objects
var canvas, ctx, keystate, frames;
var score = 0;

//Game functions
function main() {
	canvas = document.getElementById("game");
	canvas.width = cols * cellSize;
	canvas.height = rows * cellSize;
	ctx = canvas.getContext("2d");

	frames = 0;
	keyState = {};

	document.addEventListener("keydown", function(evt) {
		keyState[evt.keyCode] = true;
	});
	document.addEventListener("keyup", function(evt) {
		delete keyState[evt.keyCode];
	});

	init();
	loop();
}

function init() {
	board.init(EMPTY)
	food.set();

	var sp = {x: Math.floor(cols/2), y: rows - 1}
	snake.init(UP, sp.x, sp.y);
	board.set(SNAKE, sp.x, sp.y);
}

function loop() {
	update();
	draw();

	window.requestAnimationFrame(loop, canvas);
}

function update() {
	frames++;
	if((frames % 5) == 0) {
		if(keyState[KEY_LEFT] && (snake.direction != RIGHT)) snake.direction = LEFT;
		if(keyState[KEY_UP] && (snake.direction != DOWN)) snake.direction = UP;
		if(keyState[KEY_RIGHT] && (snake.direction != LEFT)) snake.direction = RIGHT;
		if(keyState[KEY_DOWN] && (snake.direction != UP)) snake.direction = DOWN;
		var nx = snake.last.x;
		var ny = snake.last.y;
		switch(snake.direction) {
			case UP:
				nx--;
				break;
			case RIGHT:
				ny++;
				break;
			case DOWN:
				nx++;
				break;
			case LEFT:
				ny--;
				break;
		}
		if(nx < 0 || nx > (rows - 1) || (ny < 0) || (ny > rows - 1)) {
			return init();
		}
		if(board.get(ny, nx) === FOOD) {
			var tail = {x: nx, y: ny};
			food.set();
			score++;
			console.log(score);
		} else {
			var tail = snake.remove();
			board.set(EMPTY, tail.y, tail.x);
			tail.x = nx;
			tail.y = ny;
		}
		board.set(SNAKE, tail.y, tail.x);
		snake.insert(tail.y, tail.x);
	}
}

function draw() {
	for(i = 0; i < cols; i++) {
		for(j = 0; j < rows; j++) {
			switch(board.get(i, j)) {
				case EMPTY:
					ctx.fillStyle = "#fff";
					break;
				case SNAKE:
					ctx.fillStyle = "#0ff";
					break;
				case FOOD:
					ctx.fillStyle = "#f0f";
					break;
			}
			ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
		}
	}
}

//DOM Loaded, start Action
window.onload = function() {
	main();
}
