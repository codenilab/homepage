const card = document.getElementById('bizCard');

function toggleCard() {
  card.classList.toggle('flipped');
}

card.addEventListener('click', toggleCard);
card.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleCard();
  }
});
