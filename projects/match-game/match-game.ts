import $ from "jquery";

$(document).ready(function() {
  var $game = $('#game');
 
});

class MatchGame {
  name: string;

  cards: number[];  // hold the all cards, and remaining

  constructor(name: string) {
    this.name = name;
  }

  // generate a collection of cards
  generateCards() {

  }

  // Show the card value to UI
  flipCard() {

  }


}