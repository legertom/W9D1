const MovingObject = require('./movingObject.js');
const Asteroid = require('./asteroid.js')
const Game = require('./game.js')
const GameView = require('./game_view.js')

window.addEventListener('DOMContentLoaded', function(){
    window.MovingObject = MovingObject;
    const c = document.getElementById("game-canvas");
    const ctx = c.getContext('2d')
    const g = new Game()
    const gv = new GameView(g, ctx)
    gv.start()
});

// construct a GameView object and call GameView.prototype.start within the DOMContentLoaded callback in index.js.

