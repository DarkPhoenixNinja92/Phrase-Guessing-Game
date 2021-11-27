const btnReset = document.querySelector('#btn__reset');
const keyboard = document.getElementById("qwerty");
let phrase = document.querySelector("#phrase > ul");
let overlay = document.getElementById("overlay");
let missed = 0;
let phrases = ["Let Her Rip", "Jaws of Death", "A Cold Fish", "Cut To The Chase", "Ugly Duckling", "Knuckle Down", "A Cold Day in Hell", "Wild Goose Chase", "Fool's Gold", "Shot In the Dark"];

btnReset.addEventListener('click', () => {
    overlay.style.display = "none";
});

function getRandomPhrase() {
    let phraseChooser = Math.floor(Math.random() * phrases.length);
    let chosenPhrase = phrases[phraseChooser];
    return chosenPhrase;
}
let phraseRand = getRandomPhrase();

function splitPhrase() {
    let phraseSplit = phraseRand.split('');
    return phraseSplit;
}
let separatePhrase = splitPhrase();

function addPhraseToDisplay() {
    for (let i = 0; i < phraseRand.length; i++) {
        let newLi = document.createElement("li");
        let newLiContent = document.createTextNode(phraseRand[i]);
        if (phraseRand[i] === '') {
            newLi.classList.add("space");
        }
        newLi.classList.add("letter");
        newLi.appendChild(newLiContent);
        phrase.appendChild(newLi);
    }
}
addPhraseToDisplay();

function checkLetter(e) {
    for (let i = 0; i < separatePhrase.length; i++) {
        if () {

        }
    }
}