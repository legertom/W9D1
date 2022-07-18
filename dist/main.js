/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/movingObject.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nconst DEFAULTS = {\n    COLOR: '#ff0000',\n    RADIUS: 5\n}\n\nfunction Asteroid(options) { \n    options = options ||= {}\n    options.color = DEFAULTS.COLOR \n    options.pos = options.pos \n    options.radius = DEFAULTS.RADIUS \n    options.vel = Util.randomVec(5)\n    \n    MovingObject.call(this, options);\n\n}\n\nUtil.inherits(Asteroid, MovingObject)\nmodule.exports = Asteroid\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nGame.DIM_X = 100;\nGame.DIM_Y = 100;\nGame.NUM_ASTEROIDS = 4;\n\nfunction Game() {\n    this.asteroids = []\n    this.addAsteroids()\n}\nGame.prototype.addAsteroids = function addAsteroids() {\n    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n        this.asteroids.push(new Asteroid({ pos: this.randomPosition()}))\n    }\n}\n\nGame.prototype.randomPosition = function randomPosition() {\n    return [\n        Game.DIM_X * Math.random(),\n        Game.DIM_Y * Math.random()\n    ]\n}\n\nGame.prototype.draw =  function(ctx) {\n    ctx.clearRect\n    for (let asteroid of this.asteroids){\n        asteroid.draw(ctx)\n    }\n}\n\nGame.prototype.moveObjects = function moveObjects(){\n    for (let asteroid of this.asteroids){\n        asteroid.move()\n    }\n    \n}\n\nmodule.exports = Game \n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ (() => {

eval("\n\nfunction GameView(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n}\n\nGameView.prototype.start = function(){\n    setInterval(this.moveObjects, 20)\n    setInterval(this.draw, 20)\n}\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./movingObject.js */ \"./src/movingObject.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n\nwindow.addEventListener('DOMContentLoaded', function(){\n    window.MovingObject = MovingObject;\n    const c = document.getElementById(\"game-canvas\");\n    const ctx = c.getContext('2d')\n    const g = new Game()\n    const gv = new GameView(g, ctx)\n    gv.start()\n});\n\n// construct a GameView object and call GameView.prototype.start within the DOMContentLoaded callback in index.js.\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/movingObject.js":
/*!*****************************!*\
  !*** ./src/movingObject.js ***!
  \*****************************/
/***/ ((module) => {

eval("function MovingObject(options) { \n    this.pos = options.pos\n    this.vel = options.vel\n    this.radius = options.radius\n    this.color = options.color\n}\n\nMovingObject.prototype.draw = function draw(ctx) {\n    ctx.fillStyle = this.color;\n\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI)\n    ctx.fill();\n};\n\nmodule.exports = MovingObject;\n\n// const mo = new MovingObject({\n//     pos: [30, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\n// mo.draw(ctx)\n\nMovingObject.prototype.move = function(){\n  this.pos[0] += this.vel[0]\n  this.pos[1] += this.vel[1]\n}\n\n\n\n//# sourceURL=webpack:///./src/movingObject.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate() {}\n        Surrogate.prototype = parentClass.prototype\n        childClass.prototype = new Surrogate()\n        childClass.prototype.constructor = childClass\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n      },\n      // Scale the length of a vector by the given amount.\n      scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n      }\n    \n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;