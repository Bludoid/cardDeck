class Card {
    constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    }
  
    shuffleDeck() {
        // shuffle deck
    }
    
    displayDeck() {
        // display deck
        //let myBoard = document.getElementbyId("game");
        //myBoard.innerHTML += this.rank + this.suit;
        //myBoard.innerHTML += "<br>";
        console.log(this.rank + this.suit);
    }
}



function createDeck() {
    let myRanks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let mySuits = ["h", "d", "s", "c"];
    var myDeck = [];
    for (let mySuit of mySuits) {
        for (let myRank of myRanks) {
            let myCard = new Card(myRank, mySuit);
            myDeck.push(myCard);
        }
    }
    return myDeck;
}

let myDeckCards = createDeck();
for (let oneCard of myDeckCards) {
    oneCard.displayDeck();
}