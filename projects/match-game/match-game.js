$(document).ready(function () {
    var $game = $('#game');
});
var MatchGame = (function () {
    function MatchGame(name) {
        this.name = name;
    }
    // generate a collection of cards
    MatchGame.prototype.generateCards = function () {
    };
    // Show the card value to UI
    MatchGame.prototype.flipCard = function () {
    };
    return MatchGame;
}());
