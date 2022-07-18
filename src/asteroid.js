const MovingObject = require("./movingObject");
const Util = require("./util");

const DEFAULTS = {
    COLOR: '#ff0000',
    RADIUS: 5
}

function Asteroid(options) { 
    options = options ||= {}
    options.color = DEFAULTS.COLOR 
    options.pos = options.pos 
    options.radius = DEFAULTS.RADIUS 
    options.vel = Util.randomVec(5)
    
    MovingObject.call(this, options);

}

Util.inherits(Asteroid, MovingObject)
module.exports = Asteroid