

let randomDiceSide = function(){
    return Math.floor(Math.random() * 6) + 1;
}

function displayDice(parentElem) {
    const imgElem = document.createElement('img');
    imgElem.src = `assets/imgs/dice-face-${randomDiceSide()}.svg`;
    parentElem.appendChild(imgElem);
}

function setDiceNumber(parentElem, diceNumber) {
    
    for (let i = 0; i < diceNumber; i++) {
        displayDice(parentElem);
    }
}

function newRoll() {
    
    let childNodes = displayElem.childNodes;
    for (let i = 0; i < diceNumber; i++) {
        childNodes[i].src = `assets/imgs/dice-face-${randomDiceSide()}.svg`
    }   
}

const diceNumber = 2;
const displayElem = document.querySelector('.display');
setDiceNumber(displayElem, diceNumber);

const newRollBtn = document.querySelector('#new-roll-btn');
// first eventListener
newRollBtn.addEventListener('click', newRoll);

// second eventListener
newRollBtn.addEventListener('click', function () {
    console.log('Button was clicked!');
});