/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import styles from './Game.module.scss';
import Grid from '../Grid/Grid';
import Card, { CardState } from '../Card/Card';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';

const Game = () => {
  const [isGameOver, setIsGameOver] = useState(true);
  const [cards, setCards] = useState([]);
  const [prevId, setPrevId] = useState(null);
  const [timerI, setTimerI] = useState({
    startTimer: () => {},
    stopTimer: () => {},
    resetTimer: () => {},
    getElapsedTime: () => {},
    getEasternTime: () => {},
  });
  const [namespace, setNamespace] = useState(null);
  const [score, setScore] = useState(0);
  const [numOfPairs, setNumOfPairs] = useState(0);
  const [numOfErrors, setNumOfErrors] = useState(0);
  const [numOfSeries, setNumOfSeries] = useState(0);
  const [prevGuessed, setPrevGuessed] = useState(false);

  const genCardIndices = (numOfCards) =>
    Array.from({ length: Math.floor(numOfCards / 2) }, (_, i) => [i, i])
      .flat()
      .sort(() => Math.random() - 0.5);

  const genCards = (numOfCards) =>
    genCardIndices(numOfCards).map((cardIndex, index) => ({
      id: index,
      index: cardIndex,
      isFlipped: false,
      isBlocked: false,
      state: CardState.STANDARD,
    }));

  useEffect(() => {
    if (!isGameOver) {
      setCards(genCards(12));

      timerI.resetTimer();
      setCards((prev) => prev.map((card) => ({ ...card, isFlipped: true, isBlocked: true })));
      setTimeout(() => {
        setCards((prev) => prev.map((card) => ({ ...card, isFlipped: false, isBlocked: false })));
        timerI.startTimer();
      }, 500);

      setPrevId(null);
      setNamespace(uuidv4());
      setScore(0);
    } else {
      setCards((prevCards) => prevCards.map((card) => ({ ...card, isBlocked: true })));
      timerI.stopTimer();
    }
  }, [isGameOver]);

  // useEffect(() => {
  //   console.log(cards);
  // }, [cards]);

  useEffect(() => {
    if (numOfPairs >= cards.length) {
      console.log(numOfPairs);
      gameWon();
    }
  }, [numOfPairs]);

  const startGame = () => setIsGameOver(false);
  const endGame = () => setIsGameOver(true);
  const gameWon = () => endGame();
  // const getCard = (id) => cards[id];
  // const getCardIndex = (id) => getCard(id).index;

  const calcScore = () => {
    const newScore = numOfPairs * 100 + Math.floor(timerI.getEasternTime() / 1000) - numOfErrors * 5 + numOfSeries * 50;
    /* почему-то если в качестве делителя времени использовать не 
    степень десяти то происходит ошибка с подсчетом угаданных пар */
    setScore(newScore);
  };

  const clickHandler = (id) => {
    const clickedCard = cards[id];

    if (clickedCard.isBlocked || clickedCard.isFlipped) return;

    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards[id].isFlipped = true;
      updatedCards[id].isBlocked = true;

      if (prevId !== null) {
        const prevCard = updatedCards[prevId];

        if (clickedCard.index === prevCard.index) {
          updatedCards[id].state = CardState.CORRECT;
          updatedCards[prevId].state = CardState.CORRECT;

          setNumOfPairs((prev) => prev + 2);
          if (prevGuessed) {
            setNumOfSeries((prev) => prev + 1);
            setPrevGuessed(false);
          } else {
            setPrevGuessed(true);
          }

          updatedCards[id].isBlocked = false;
          updatedCards[prevId].isBlocked = false;
        } else {
          setTimeout(() => {
            setCards((newCards) =>
              newCards.map((card, idx) =>
                idx === id || idx === prevId
                  ? { ...card, isFlipped: false, isBlocked: false, state: CardState.STANDARD }
                  : card
              )
            );
          }, 1000);

          setNumOfErrors((prev) => prev + 1);
          setPrevGuessed(false);

          updatedCards[id].state = CardState.INCORRECT;
          updatedCards[prevId].state = CardState.INCORRECT;
        }

        calcScore();
        setPrevId(null);
      } else {
        setPrevId(id);
      }

      return updatedCards;
    });
  };

  return (
    <div className={`game ${styles.container}`}>
      <Timer
        callback={(timerI) => setTimerI(timerI)}
        timeAmount={5 * 60 * 1000}
        endTrigger={endGame}
        onMilliseconds={true}
      />
      {isGameOver ? (
        <Button className={styles.game_btn} onClick={startGame}>
          New Game
        </Button>
      ) : (
        <Button className={styles.game_btn} onClick={endGame}>
          Stop Game
        </Button>
      )}
      <p>{score}</p>
      <Grid
        // width={4}
        // height={3}
        cards={cards.map(({ id, index, isFlipped, state }) => (
          <Card key={id} id={id} index={index} isFlipped={isFlipped} state={state} onClick={() => clickHandler(id)} />
        ))}
        namespace={namespace}
      />
    </div>
  );
};

export default Game;
