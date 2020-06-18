function writeCards(arr, str) {
  const signedCards = [];
  for (let i = 0; i < arr.length; i++) {
    signedCards.push(`Thank you, ${arr[i]}, for the wonderful ${str} gift!`);
  }
  return signedCards;
}

function countDown(num) {
  for (let i = 0; num >= i; num--) {
    console.log(num);
  }
}
