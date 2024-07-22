/**
 * @param {number[]} cards
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (cards, groupSize) {
  if (cards.length % groupSize !== 0) return false;

  cards.sort((a, b) => a - b);

  const countMap = new Map();

  countCard();

  let countRemoved = 0;
  for (let card of cards) {
    if (countRemoved === cards.length) break; //  所有牌都拿完的時候可以不用繼續跑完剩下的
    if (countMap.get(card) === 0) continue;

    //  以目前 card 為起始點按照 groupSize 檢查是否是連續的卡
    for (let i = 0; i < groupSize; i++) {
      let currentCard = card + i;

      if (
        countMap.get(currentCard) === undefined ||
        countMap.get(currentCard) === 0
      )
        return false;

      //  檢查一個就拿掉一張
      countMap.set(currentCard, countMap.get(currentCard) - 1);
      countRemoved++;
    }
  }

  return true;

  function countCard() {
    for (let card of cards) {
      countMap.set(card, (countMap.get(card) || 0) + 1);
    }
  }
};
