const cards = Array.from(document.querySelectorAll('.card'));
console.log(cards)
cards.forEach(card => {
    card.addEventListener('click', () => {
        const clickedIndex = cards.indexOf(card);
        const clickedCard = cards.splice(clickedIndex, 1)[0];
        cards.push(clickedCard);

        cards.forEach((c, index) => {
            c.setAttribute('data-index', index);
        });
    });
});