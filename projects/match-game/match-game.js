//import * as $ from "jquery";
$(document).ready(function () {
    var $game = $('#game');
    var matchGame;
    startGame();
    $('#restartGame').on('click', startGame);
    function startGame() {
        $game.html('');
        matchGame = new MatchGame($game);
        matchGame.renderCards();
        // event listeners
        $('.card').on('click', function () {
            console.log('click', $(this));
            console.log('data', $(this).data());
            matchGame.flipCard($(this));
        });
    }
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
        this.flippedCard = null; //hold the single flippedCard
        this.$game = $game;
        this.generateCards();
    }
    // generate a collection of cards
    MatchGame.prototype.generateCards = function () {
        for (var i = 0; i < 8; i++) {
            var aCard = new Card(i);
            this.cards.push(aCard);
            this.cards.push(aCard);
        }
        //shuffle the cards
        this.cards.sort(function () {
            return 0.5 - Math.random();
        });
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
        var _this = this;
        // compare value of new flippedCard and flippedCard[0];
        var isFlipped = $card.data('isFlipped');
        var value = $card.data('value');
        if (isFlipped)
            return;
        $card.text(value).data('isFlipped', true); // reveal card value
        if (!this.flippedCard) {
            this.flippedCard = $card;
            return;
        }
        if (value === this.flippedCard.data('value')) {
            this.flippedCard = null;
        }
        else {
            // hide the cards;
            console.log('flippedCard :', this.flippedCard);
            setTimeout(function () {
                // TODO: separate UI and logic
                _this.flippedCard.text('').data('isFlipped', false);
                $card.text('').data('isFlipped', false);
                _this.flippedCard = null;
            }, 200);
        }
        //console.log($card.data());
    };
    return MatchGame;
}());
