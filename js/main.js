var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function() {
//	var isMatch = function() {
		if (cardsInPlay.length === 2) {
			if (cardsInPlay[0] === cardsInPlay[1]) {
				alert("You found a match!");
			} else {
				alert("Sorry, try again.");
			}
		} else {
			return;
		}
//	}
//	isMatch();
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
//	var cardId = data-id.value;
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

var reset = function() {
	document.getElementById('game-board').innerHTML = '';
	cardsInPlay = [];
	createBoard();
};

var button = document.querySelector('button');
button.addEventListener('click', reset);