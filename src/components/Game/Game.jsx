/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import styles from './Game.module.scss';
import Grid from '../Grid/Grid';
import Card, { CardState } from '../Card/Card';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';
import WonWindow from './WonWindow/WonWindow';

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
    getElapsedTimeRender: () => {},
    getEasternTimeRender: () => {},
  });
  const [namespace, setNamespace] = useState(null);
  const [score, setScore] = useState(0);
  const [numOfPairs, setNumOfPairs] = useState(0);
  const [numOfErrors, setNumOfErrors] = useState(0);
  const [numOfSeries, setNumOfSeries] = useState(0);
  const [prevGuessed, setPrevGuessed] = useState(false);
  const [showWonWindow, setShowWonWindow] = useState(false);

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

      setCards((prev) => prev.map((card) => ({ ...card, isFlipped: true, isBlocked: true })));
      setTimeout(() => {
        setCards((prev) => prev.map((card) => ({ ...card, isFlipped: false, isBlocked: false })));
        timerI.resetTimer();
        timerI.startTimer();
      }, 500);

      setPrevId(null);
      setNamespace(uuidv4());
      setScore(0);
      setNumOfPairs(0);
      setNumOfErrors(0);
      setNumOfSeries(0);
      setPrevGuessed(false);
      setShowWonWindow(false);
    } else {
      setCards((prevCards) => prevCards.map((card) => ({ ...card, isBlocked: true })));
      timerI.stopTimer();
    }
  }, [isGameOver]);

  useEffect(() => {
    console.log(numOfPairs);
    console.log(timerI.getElapsedTime(), timerI.getEasternTime());
    if (numOfPairs >= cards.length && cards.length !== 0) {
      gameWon();
    }
  }, [numOfPairs]);

  const startGame = () => setIsGameOver(false);
  const endGame = () => setIsGameOver(true);
  const gameWon = () => {
    console.log('won');
    setShowWonWindow(true);
    endGame();
  };
  // const getCard = (id) => cards[id];
  // const getCardIndex = (id) => getCard(id).index;

  const calcScore = () => {
    const newScore = numOfPairs * 100 + Math.floor(timerI.getEasternTime() / 1000) - numOfErrors * 5 + numOfSeries * 50;
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

          setNumOfPairs((prev) => prev + 1);
          if (prevGuessed) {
            setNumOfSeries((prev) => prev + 1);
            setPrevGuessed(false);
          } else {
            setPrevGuessed(true);
          }

          updatedCards[id].isBlocked = false;
          updatedCards[prevId].isBlocked = false;
        } else {
          // setCards((prev) => prev.map((card) => ({ ...card, isBlocked: true }))); /* all card block */
          setTimeout(() => {
            setCards((newCards) =>
              newCards.map((card, idx) =>
                idx === id || idx === prevId
                  ? { ...card, isFlipped: false, isBlocked: false, state: CardState.STANDARD }
                  : card
              )
            );

            // setCards((prev) => prev.map((card) => ({ ...card, isBlocked: false }))); /* all card unblock */
          }, 500);

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
        // onMilliseconds={true}
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
      {showWonWindow && (
        <WonWindow
          elapsedTime={timerI.getElapsedTimeRender()}
          score={score}
          onConfirm={() => setShowWonWindow(false)}
        />
      )}
    </div>
  );
};

export default Game;
