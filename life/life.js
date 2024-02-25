/*
 * TODO:
 *
 * Keep current state when resizing board.
 *
 * Consider modular coordinate arithmetic.
 *
 * Optimizations, such as making state global so don't need to rediscover it
 * by walking DOM each generation.
 *
 * Factor all the board iteration into its own function, parameterized with
 * another function to reduce code size.
 *
 * Consider using document.body.client{Height,Width} to determine ideal size
 * of cells.
 *
 * Each N generations, change the color of live cells.
 */

var generation = 0;
var interval = 100;

var colors = [ "#360", "red", "blue", "black", "#606", "#660", "#ff0" ];

var element = function(id) {
    return document.getElementById(id);
};

var generateBoard = function() {
    stopGame();

    var tbl = ["<table>"];
    var size = element("boardSize").value;

    for (var y = 0; y < size; y++) {
        tbl.push("<tr>");
        for (var x = 0; x < size; x++) {
            tbl.push("<td id='" + x + "," + y + "'>&nbsp;</td>");
        }
        tbl.push("</tr>");
    }

    tbl.push("</table>");

    element("gameBoard").innerHTML = tbl.join("");

    resetGame();
};

var toggleLiveness = function() {
    stopGame();
    setClass(this.id, "live" == this.className ? "dead" : "live");
};

var getState = function() {
    var state = [];
    var size = element("boardSize").value;

    for (var x = 0; x < size; x++) {
        state[x] = [];
        for (var y = 0; y < size; y++) {
            state[x][y] = "live" == element(x + "," + y).className ? 1 : 0;
        }
    }

    return state;
};

var setClass = function(id, klass) {
    var e = element(id);
    e.className = klass;
    e.setAttribute("class", klass);
    e.setAttribute("className", klass);
}

var liveNeighbors = function(state, x, y) {
    var n = 0;
    var size = element("boardSize").value;

    if (x != 0) {
        if (y != 0)
            n += state[x-1][y-1];
        n += state[x-1][y];
        if (y != size - 1)
            n += state[x-1][y+1];
    }

    if (y != 0)
        n += state[x][y-1];
    if (y != size - 1)
        n += state[x][y+1];

    if (x != size - 1) {
        if (y != 0)
            n += state[x+1][y-1];
        n+= state[x+1][y];
        if (y != size - 1)
            n += state[x+1][y+1];
    }

    return n;
};

var nextGeneration = function() {
    var st = getState();
    var size = element("boardSize").value;

    for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
            var n = liveNeighbors(st, x, y);
            var xy = x  + "," + y;
            var e = element(xy);

            if (n < 0 || n > 8)
                die("Something is fucked up: " + xy + " has " + n + " neighbors");

            if ("live" == e.className) {
                if (n < 2 || n > 3)
                    e.className = "dead";
                // Otherwise, cell remains live because 2 or 3 neighbors.
            }
            else if ("dead" == e.className && 3 == n) {
                e.className = "live";
            }
        }
    }

    generation++;
    element("generation").innerHTML = generation + "";

    clearInterval(interval);
    var radios = document.getElementsByName("interval");
    for (var i = 0; i < radios.length; ++i) {
        if (radios[i].checked) {
            interval = setInterval(nextGeneration, radios[i].value + 0);
            break;
        }
    }
};

var die = function(message) {
    stopGame();
    alert(message);
};

var playGame = function() {
    var b = element("playButton");
    b.onclick = stopGame;
    b.innerHTML = "Stop";
    nextGeneration();
};

var resetGame = function() {
    generation = 0;
    element("generation").innerHTML = generation + "";

    var size = element("boardSize").value;

    for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
            var e = element(x + "," + y);
            setClass(e.id, "dead");
            e.onclick = toggleLiveness;
        }
    }
};

var randomGame = function() {
    stopGame();

    var size = element("boardSize").value;
    for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
            if (Math.random() > 0.8)
                setClass(x + "," + y, "live");
        }
    }

    playGame();
};

var stopGame = function() {
    clearInterval(interval);
    var b = element("playButton");
    b.onclick = playGame;
    b.innerHTML = "Play";
};

element("boardSize").onkeyup = generateBoard;
element("playButton").onclick = nextGeneration;
element("playButton").onclick = playGame;
element("resetButton").onclick = resetGame;
element("randomButton").onclick = randomGame;

generateBoard();
