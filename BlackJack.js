//Making deck
const generateDeck = () =>{
const deck = [];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

for (const suit of suits){
    for (const card of cards){
        deck.push({"card" : card, "suit" : suit})
    }
}
return deck;
};
//Deck made!

const myDeck = generateDeck();

const drawCard = (deck) =>{
const randomIndex = Math.floor(Math.random() * deck.length);
const card = deck[randomIndex];
deck.splice(randomIndex, 1);
return card;
};

const checkScore = (hand) =>{
    let total = 0;
    for (const cardObject of hand){
        if (cardObject.card === "King"){
            total += 10;
        } else if (cardObject.card === "Queen"){
            total += 10;
        } else if (cardObject.card === "Jack"){
            total += 10;
        } else if (cardObject.card === "Ace"){
            total += 1;
        } else{
            total += Number(cardObject.card);
        }
    }
    return total;
};

const myCard = drawCard(myDeck);
const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

console.log("Starting player hand : " , playerHand);
console.log("Starting player score : ", checkScore(playerHand));
console.log("Starting dealer hand : ", dealerHand);
console.log("Starting dealer score : ", checkScore(dealerHand));

while(true){
    //deal player card
    playerHand.push(drawCard(myDeck));
    //check if player is bust
    const playerScore = checkScore(playerHand);
    let dealerScore = checkScore(dealerHand);
    if (playerScore > 21) {
        console.log (`You lose! Your final score was ${playerScore}, while dealer's final score was ${dealerScore}`);
        break;} 
    //check if player got blackjack
    if (playerScore === 21){
        console.log(`Congratulations! You got Blackjack with the score of ${playerScore}, while dealer's final score was ${dealerScore}`);
        break;}

    //deal dealer card
    dealerHand.push(drawCard(myDeck));
    //check if dealer is bust
    dealerScore = checkScore(dealerHand);
    if (dealerScore > 21) {
        console.log (`You win! Your final score was ${playerScore}, while dealer's final score was ${dealerScore}`);
        break;} 
    //check if dealer got blackjack
    if (dealerScore === 21){
        console.log(`You lose! Dealer got Blackjack with the score of ${dealerScore}, while your final score was ${playerScore}`);
        break;}
}

console.log("Ending player hand : " , playerHand);
console.log("Ending player score : ", checkScore(playerHand));
console.log("Ending dealer hand : ", dealerHand);
console.log("Ending dealer score : ", checkScore(dealerHand));