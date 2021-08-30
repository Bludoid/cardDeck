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

const deck = new Cards();


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
    playButton.innerHTML = "PLAY";
    getMe("centerDiv").appendChild(playButton);
    // give all such buttons a class ("playButtons"?) and change it in the CSS file
}





