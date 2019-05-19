export function getTotalCards(cards) {
  let totalCards = []
  for (var property in cards) {
    totalCards.push(cards[property].total)
  }

  let total = 0;
  for (var i in totalCards) {
    total = total + totalCards[i]
  }

  return total
}
