const cards = document.querySelectorAll('.card');
const restartButton = document.getElementById('restart');
let firstcard = null;
let secondcard = null;
let lockcard = false;
function shuffleCards() {
cards.foreach(card => {
let randompos = Math.floor(Math.random() * 12);
card. style.order = randompos;
});
}