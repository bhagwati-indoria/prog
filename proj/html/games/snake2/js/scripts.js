//Constants
var EMPTY = 0;
var SNAKE = 1;
var FOOD = 2;

var LEFT = 0;
var UP = 1;
var RIGHT = 2;
var DOWN = 3;

var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;



//Config
var rows = 25;
var cols = 25;
var cellSize = 20;
var snakeColor = "#0ff";
var foodColor = "#f0f";
var backgroundColor = "#fff";




//Game Datastructures

board = {
	_board: null,
	init: function(val) {
		this._board = [];
		for(x = 0; x < cols; x++) {
			this._board.push([]);
			for(y = 0; y < rows; y++) {
				this._board[x].push(val);
			}
		}
	},
	set: function(val, c, r) {
		this._board[c][r] = val;
	},
	get: function(c, r) {
		return this._board[c][r];
	}
}

snake = {
	_snake: null,
	_insert: function(x, y) {
		this._snake.unshift({x: x, y: y})
		board.set(SNAKE, x, y);
	},
	_remove: function() {
		var tail = this._snake.pop();
		board.set(EMPTY, tail.x, tail.y);
	},
	direction: null,
	init: function(dir) {
		this._snake = [];
		this.direction = dir;
		this._insert(Math.floor(cols/2), rows - 1)
	},
	move: function() {
		headX = this._snake[0].x;
		headY = this._snake[0].y;
		switch(snake.direction) {
			case LEFT:
				headX--;
				break;
			case UP:
				headY--;
				break;
			case RIGHT:
				headX++;
				break;
			case DOWN:
				headY++;
				break;
		}
		if(board.get(headX, headY) === FOOD) {
			snake._insert(headX, headY);
			food.set();
		} else {
			snake._insert(headX, headY);
			snake._remove();
		}
		return {x: headX, y: headY};
	}
}

food = {
	set: function() {
		var empty = [];
		for(x = 0; x < rows; x++) {
			for(y = 0; y < rows; y++) {
				if(board.get(x, y) === EMPTY) {
					empty.push({x:x, y:y});
				}
			}
		}
		var randPos = Math.floor(Math.random() * empty.length);
		board.set(FOOD, empty[randPos].x, empty[randPos].y);
	}
}

//Game globals
var frames = 0;
var ctx = null;
var anim = null;


//Game Methods

function resetBoard() {
	board.init(EMPTY);
	snake.init(UP);
	food.set();
}

function main() {
	//Set up canvas for graphical representation
	var canvas = document.getElementById("game");
	ctx = canvas.getContext("2d");
	canvas.height = rows * cellSize;
	canvas.width = cols * cellSize;

	//Set up event listeners for controlling snake
	window.addEventListener("keydown", function(evt) {
		switch(evt.keyCode) {
			case KEY_LEFT:
				if(snake.direction !== RIGHT) snake.direction = LEFT;
				break;
			case KEY_UP:
				if(snake.direction !== DOWN) snake.direction = UP;
				break;
			case KEY_RIGHT:
				if(snake.direction !== LEFT) snake.direction = RIGHT;
				break;
			case KEY_DOWN:
				if(snake.direction !== UP) snake.direction = DOWN;
				break;
		}
	});

	//Set up board and start game loop
	resetBoard();
	draw();
	loop();
}

function draw() {
	for(x = 0; x < cols; x++) {
		for(y = 0; y < rows; y++) {
			switch(board.get(x, y)) {
				case EMPTY:
					ctx.fillStyle = backgroundColor;
					break;
				case SNAKE:
					ctx.fillStyle = snakeColor;
					break;
				case FOOD:
					ctx.fillStyle = foodColor;
					break;
			}
			ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
		}
	}
}

function update() {
	var head = snake.move();
	if((head.x < 1) || (head.x > cols) || (head.y < 0) || (head.y > rows)) {
		resetBoard();
	}
}

function loop() {
	frames++;
	if((frames % 5) == 0) {
		update();
		draw();
	}
	anim = window.requestAnimationFrame(loop);
}

function pause() {
	window.cancelAnimationFrame(anim);
	frames = 0;
}


window.onload = function() {
	main();
}
