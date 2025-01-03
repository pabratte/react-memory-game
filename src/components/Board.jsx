import Card from "./Card";
import { useEffect, useState } from "react";

export default function Board({ showWinPage }) {
  const [cards, setCards] = useState([]);
  const [flippedCardsIds, setFlippedCardsIds] = useState([]);
  const [matchedCardsIds, setMatchedCardsIds] = useState([]);
  const [userCanClick, setUserCanClick] = useState(true);
  const [triesCount, setTriesCount] = useState(0);

  function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  function createCardsArray(cardCount = 16) {
    const cards = [];
    for (let i = 0; i < cardCount; i++) {
      cards.push({
        id: i,
        value: Math.floor(i / 2),
      });
    }
    return cards;
  }

  function clickCallback(id) {
    flippedCardsIds.push(id);
    setFlippedCardsIds([...flippedCardsIds]);
  }

  function getCardValue(cardId) {
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === cardId) {
        return cards[i].value;
      }
    }
    return null;
  }

  useEffect(() => {
    const newCards = createCardsArray();
    shuffleArray(newCards);
    setCards(newCards);
  }, []);

  useEffect(() => {
    if (flippedCardsIds.length === 2) {
      setTriesCount(triesCount + 1);
      setUserCanClick(false);
      setTimeout(() => {
        const value1 = getCardValue(flippedCardsIds[0]);
        const value2 = getCardValue(flippedCardsIds[1]);
        if (value1 === value2) {
          matchedCardsIds.push(flippedCardsIds[0], flippedCardsIds[1]);
          setMatchedCardsIds([...matchedCardsIds]);
        }
        setUserCanClick(true);
        setFlippedCardsIds([]);
      }, 2000);
    }
  }, [flippedCardsIds]);

  useEffect(() => {
    if (cards.length != 0 && matchedCardsIds.length === cards.length) {
      showWinPage(triesCount);
    }
  }, [matchedCardsIds]);

  return (
    <>
      <div className="board">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            value={card.value}
            isFlipped={flippedCardsIds.includes(card.id)}
            clickCallback={clickCallback}
            userCanClick={userCanClick}
            isMatched={matchedCardsIds.includes(card.id)}
          ></Card>
        ))}
      </div>
    </>
  );
}
