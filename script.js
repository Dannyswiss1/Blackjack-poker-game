// ex 8 BlackJack (project) code.

// 2. Use getRandomCard() to set the values of firstCard and secondCard
/* let firstCard = getRandomCard()
let secondCard = getRandomCard() */
let cards = [];
let sum = 0; // firstCard + secondCard
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// console.log(cards)

// declaring an object
// Objects - store data in-depth - composite / complex data type
// key-value pairs
let player = {
  name: "Dannyswiss",
  chips: 145,
};
// methods are functions that are attached to objects

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
  // Make this function return a random number between 1 and 13

  /* let randomCard = Math.floor( Math.random() * 13 ) + 1
  return randomCard */
  // or simply
  // return Math.floor( Math.random() * 13 ) + 1 // 1-13

  // if 1     -> return 11
  // if 11-13 -> return 10
  let randomNumber = Math.floor(Math.random() * 13) + 1; // 1-13
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

/* let randomCard = getRandomCard()
console.log(randomCard)

firstCard = randomCard
console.log(firstCard)

secondCard = randomCard
console.log(secondCard) */

function startGame() {
  isAlive = true;
  // Generate two random numbers
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  // Re-assign the cards and sum variables so that the game can start
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    // 3. Use the getRandomCard() to set the value of card
    let card = getRandomCard();
    // card = randomCard
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
