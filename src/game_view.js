

function GameView(game, ctx) {
    this.ctx = ctx;
    this.game = game;
}

GameView.prototype.start = function(){
    setInterval(this.moveObjects, 20)
    setInterval(this.draw, 20)
}