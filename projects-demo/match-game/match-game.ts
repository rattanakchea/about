//import * as $ from "jquery";
$(document).ready(function () {
  var $game = $('#game');
  var matchGame;
  startGame()

  $('#restartGame').on('click', startGame);

  function startGame() {
    $game.html('');
    matchGame = new MatchGame($game)
    matchGame.renderCards();

    // event listeners
    $('.card').on('click', function () {
      console.log('click', $(this));
      console.log('data', $(this).data());
      matchGame.flipCard($(this));
    });
  }

});

class Card {
  value: number;
  isFlipped: boolean = false;

  constructor(value) {
    this.value = value;
  }

  // return jquery DOM
  renderHtml() {
    var $cardElemment = $('<div class="col-xs-3 card"></div>');
    $cardElemment.data({
      value: this.value,
      isFlipped: this.isFlipped
    })
    return $cardElemment;
  }

  flip() {
    this.isFlipped = !this.isFlipped;
  }
}

class MatchGame {
  name: string;
  cards: Card[] = [];  // hold the all cards, and remaining

  flippedCard: any = null;  //hold the single flippedCard
  $game: any;

  constructor($game) {
    this.$game = $game;
    this.generateCards();
  }

  // generate a collection of cards
  generateCards() {
    for (var i = 0; i < 8; i++) {
      let aCard = new Card(i);
      this.cards.push(aCard);
      this.cards.push(aCard);
    }
    //shuffle the cards
    this.cards.sort(() => {
      return 0.5 - Math.random();
    })
  }

  // render the cards to UI
  renderCards() {
    this.cards.forEach((card) => {
      this.$game.append(card.renderHtml());
    });
  }

  // Show the card value to UI
  // @param, jquery card object with data attachement
  flipCard($card) {

    // compare value of new flippedCard and flippedCard[0];
    var isFlipped = $card.data('isFlipped');
    var value = $card.data('value');

    if (isFlipped) return;

    $card.text(value).data('isFlipped', true);  // reveal card value

    if (!this.flippedCard) {
      this.flippedCard = $card;
      return;
    }

    if (value === this.flippedCard.data('value')) {  // found a match
      this.flippedCard.css('background-color', 'rgb(153, 153, 153)');
      $card.css('background-color', 'rgb(153, 153, 153)');
      this.flippedCard = null;
     
    } else {
      // hide the cards;
      console.log('flippedCard :', this.flippedCard);
      setTimeout(() => {
        // TODO: separate UI and logic

        this.flippedCard.text('').data('isFlipped', false);
        $card.text('').data('isFlipped', false);
        this.flippedCard = null;
      }, 200);

    }
    //console.log($card.data());
  }
}