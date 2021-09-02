"use script";

class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
  
    displayCard() {
        return String(this.rank + this.suit);
    }
}


class Cards {
    constructor() {
        this.myRanks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        this.mySuits = ["&hearts;", "&diams;", "&spades;", "&clubs;"];
        this.deckie = [];
    }
    
    createDeck() {
        for (let mySuit of this.mySuits) {
            for (let myRank of this.myRanks) {
                let myCard = new Card(myRank, mySuit);
                this.deckie.push(myCard);
            }
        }
    }
    
    displayDeck() {
        let myDiv = getMe("deckDiv");
        myDiv.innerHTML = "";
        let i=1;
        for (let myCard of deck.deckie) {
            let cardSpan = document.createElement("SPAN");
            cardSpan.innerHTML = (myCard.displayCard());
            if (myCard.suit == "&hearts;" || myCard.suit == "&diams;") {
                cardSpan.className = "redCard";
            }
            myDiv.appendChild(cardSpan);
            if (i%13===0) {
                let breaky = document.createElement("BR");
                myDiv.appendChild(breaky);
            }
            i++;
        }
    }
    
    shuffleDeck() {
        for (let i = 51; i>0; i--) {
            let j = Math.floor(Math.random()*(i+1));
            [this.deckie[i], this.deckie[j]] = [this.deckie[j], this.deckie[i]];
        }
    }
}


class Player {
    constructor(name) {
        this.name = name;
        this.myDeck = [];
    }
    
    revealCard(myCard) {
        let myBoard = getMe("centerDiv");
        let cardSpan = document.createElement("SPAN");
            cardSpan.innerHTML = (myCard.displayCard());
            if (myCard.suit == "&hearts;" || myCard.suit == "&diams;") {
                cardSpan.className = "redCard";
            }
            myBoard.appendChild(cardSpan);
        // flipped cards = this.myDeck.pop();    
    }
}

const deck = new Cards();
let player1 = new Player("Bob");
let player2 = new Player("Fred");


//===========================================

function getMe(myID){
    return document.getElementById(myID);
}

function createDeckButton() {
    deck.createDeck();
    deck.displayDeck();
    getMe("showButton").style = "display: none";
    getMe("shuffleButton").style = "visibility: visible";
}

function shuffleDeckButton() {
    deck.shuffleDeck();
    getMe("deckDiv").innerHTML = "";
    let deckImg = document.createElement("IMG");
    deckImg.src = "images/deckBig.jpg";
    deckImg.id = "bigDeckImg";
    getMe("deckDiv").appendChild(deckImg);
    getMe("shuffleButton").style = "display: none";
    getMe("dealButton").style = "visibility: visible";
}

function dealCardsButton() {
    getMe("deckDiv").innerHTML = "";
    const leftDiv = document.createElement("DIV");
    const centerDiv = document.createElement("DIV");
    const rightDiv = document.createElement("DIV");
    leftDiv.id = "leftDiv";
    centerDiv.id = "centerDiv";
    rightDiv.id = "rightDiv";
    getMe("deckDiv").appendChild(leftDiv);
    getMe("deckDiv").appendChild(centerDiv);
    getMe("deckDiv").appendChild(rightDiv);
    let leftDeckImg = document.createElement("IMG");
    leftDeckImg.src = "images/deckSmall.jpg";
    getMe("leftDiv").appendChild(leftDeckImg);
    let rightDeckImg = document.createElement("IMG");
    rightDeckImg.src = "images/deckSmallRight.jpg";
    getMe("rightDiv").appendChild(rightDeckImg);
    getMe("dealButton").style = "display: none";
    let playButton = document.createElement("BUTTON");
    playButton.setAttribute("type", "button");
    playButton.setAttribute("id", "playButton");
    playButton.setAttribute("onclick", "playWar()");
    playButton.setAttribute("class", "gameButtons");
    playButton.innerHTML = "PLAY";
    getMe("centerDiv").appendChild(playButton);
    for (let i=0; i<deck.deckie.length; i++) {
        if (i===0 || i%2===0) {
            player1.myDeck.push(deck.deckie[i]);
        }
        else {
            player2.myDeck.push(deck.deckie[i]);
        }
    }
}


function playWar() {
    getMe("playButton").style = "display: none";
    let flippedCard1 = player1.myDeck.pop(); 
    player1.revealCard(flippedCard1);
    let flippedCard2 = player2.myDeck.pop();
    player2.revealCard(flippedCard2);
    let solveButton = document.createElement("BUTTON");
    solveButton.setAttribute("type", "button");
    solveButton.setAttribute("id", "solveButton");
    solveButton.setAttribute("onclick", "solveWar()");
    solveButton.setAttribute("class", "gameButtons");
    solveButton.innerHTML = "FINISH ROUND";
    getMe("centerDiv").appendChild(solveButton);
}



