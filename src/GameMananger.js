var gameMananger = function (game) {}

gameMananger.prototype = {

  create: function () {
    this.game.state.start('HouseLevel', true, false)
  }

}
