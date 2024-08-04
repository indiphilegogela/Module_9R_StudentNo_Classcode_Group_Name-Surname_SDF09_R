// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

Let player = {
    name: "Frank"
    Chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false 
let message = ""
let messageEl = document.getElementBy Id("message-El")
let sumEl = document.getElementById ("sum-El")
let cardsEl = document.getElementById("cards-El")
let playerEl = document.getElementById("player-El")

playerEl.textContent = player.name + ": $" + player.chips 


function getRandomCard() {
    let randomnumber = Math.floor( Math.random()*13) + 1
    if (randomnumber > 10) {
        return 10
    } else if (randomNumber ===1){
        return 11
    } else {
        return randomNumber
    }

}

function startGame() {
    isAlive = true 
    let firstcard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    for(let i = 0; i <cards.length; i++) {
        cardsEl.textContent += cards [i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "do you want to draw a new card?"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false
    } 
    messageEl.textContent = message 
}

function newCard() {
    if(isalive === & hasBlackjack === false) {
        let card = getRandomCard()
      sum += card
      cards.push(card)
      renderGame()
    }
}