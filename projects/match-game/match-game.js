//import * as $ from "jquery";
$(document).ready(function () {
    var $game = $('#game');
    var matchGame = new MatchGame($game);
    matchGame.renderCards();
    //$game.html('hello');
    // event listeners
    $('.card').on('click', function () {
        console.log('click', $(this));
        console.log('data', $(this).data());
        matchGame.flipCard($(this));
    });
});
var Card = (function () {
    function Card(value) {
        this.isFlipped = false;
        this.value = value;
    }
    // return jquery DOM
    Card.prototype.renderHtml = function () {
        var $cardElemment = $('<div class="col-xs-3 card"></div>');
        $cardElemment.data({
            value: this.value,
            isFlipped: this.isFlipped
        });
        return $cardElemment;
    };
    Card.prototype.flip = function () {
        this.isFlipped = !this.isFlipped;
    };
    return Card;
}());
var MatchGame = (function () {
    function MatchGame($game) {
        this.cards = []; // hold the all cards, and remaining
        this.$game = $game;
        this.generateCards();
    }
    // generate a collection of cards
    MatchGame.prototype.generateCards = function () {
        for (var i = 0; i < 4; i++) {
            var aCard = new Card(i);
            this.cards.push(aCard);
        }
        //shuffle the cards
    };
    // render the cards to UI
    MatchGame.prototype.renderCards = function () {
        var _this = this;
        this.cards.forEach(function (card) {
            _this.$game.append(card.renderHtml());
        });
    };
    // Show the card value to UI
    // @param, jquery card object with data attachement
    MatchGame.prototype.flipCard = function ($card) {
        var isFlipped = $card.data('isFlipped');
        var value = $card.data('value');
        console.log($card.data());
        //if already flipped, return
        // reveal the card
        $card.text(value).data('isFlipped', true);
        console.log('after: ', $card.data());
    };
    return MatchGame;
}());
