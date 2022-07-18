const Asteroid = require("./asteroid.js");
const Util = require("./util");

Game.DIM_X = 100;
Game.DIM_Y = 100;
Game.NUM_ASTEROIDS = 4;

function Game() {
    this.asteroids = []
    this.addAsteroids()
}
Game.prototype.addAsteroids = function addAsteroids() {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({ pos: this.randomPosition()}))
    }
}

Game.prototype.randomPosition = function randomPosition() {
    return [
        Game.DIM_X * Math.random(),
        Game.DIM_Y * Math.random()
    ]
}

Game.prototype.draw =  function(ctx) {
    ctx.clearRect
    for (let asteroid of this.asteroids){
        asteroid.draw(ctx)
    }
}

Game.prototype.moveObjects = function moveObjects(){
    for (let asteroid of this.asteroids){
        asteroid.move()
    }
    
}

module.exports = Game 