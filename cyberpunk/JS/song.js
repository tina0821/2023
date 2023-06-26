const cards = document.querySelectorAll('.card');
const arrows = document.querySelectorAll('.arrow');
let currentCard = 0;

arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if (arrow.classList.contains('arrow-right')) {
      currentCard++;
      if (currentCard > cards.length - 1) {
        currentCard = 0;
      }
    } else if (arrow.classList.contains('arrow-left')) {
      currentCard--;
      if (currentCard < 0) {
        currentCard = cards.length - 1;
      }
    }
    cards.forEach(card => {
      card.classList.remove('active');
    });
    cards[currentCard].classList.add('active');
  });
});
