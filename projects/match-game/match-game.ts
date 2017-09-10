//import * as $ from "jquery";

$(document).ready(function() {
  var $game = $('#game');
  var matchGame = new MatchGame($game)
  
  matchGame.renderCards();
  //$game.html('hello');


  // event listeners
  $('.card').on('click', function() {
    console.log('click', $(this));
    console.log('data', $(this).data());

    matchGame.flipCard($(this));
  });
  
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
  $game: any;

  constructor($game) {
    this.$game = $game;
    this.generateCards();
  }

  // generate a collection of cards
  generateCards() {
    for(var i=0; i < 4; i++) {
      let aCard = new Card(i);
      this.cards.push(aCard);
    }

    //shuffle the cards
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

    var isFlipped = $card.data('isFlipped');
    var value = $card.data('value');
    console.log($card.data());

    //if already flipped, return
   
   
    // reveal the card
    $card.text(value).data('isFlipped', true);
    console.log('after: ', $card.data());

  }


}