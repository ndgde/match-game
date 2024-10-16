import React, { useState, useEffect } from 'react';
import styles from './Game.module.scss';
import Grid from '../Grid/Grid';
import Card, { CardState } from '../Card/Card';
import Timer, { TimerControls } from '../Timer/Timer';
import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';
import WonWindow from './WonWindow/WonWindow';

const Game: React.FC = () => {
  const [isGameOver, setIsGameOver] = useState<boolean>(true);
  const [cards, setCards] = useState<CardType[]>([]);
  const [prevId, setPrevId] = useState<number | null>(null);
  const [timerI, setTimerI] = useState<TimerControls>({
    startTimer: () => {},
    stopTimer: () => {},
    resetTimer: () => {},
    getElapsedTime: () => 0,
    getEasternTime: () => 0,
    getElapsedTimeRender: () => '',
    getEasternTimeRender: () => '',
  });
  const [namespace, setNamespace] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [numOfPairs, setNumOfPairs] = useState<number>(0);
  const [numOfErrors, setNumOfErrors] = useState<number>(0);
  const [numOfSeries, setNumOfSeries] = useState<number>(0);
  const [prevGuessed, setPrevGuessed] = useState<boolean>(false);
  const [showWonWindow, setShowWonWindow] = useState<boolean>(false);
  const [fieldWidth, setFieldWidth] = useState<number>(4);
  const [fieldHeight, setFieldHeight] = useState<number>(3);
  const [difficulty, setDifficulty] = useState<number>(1);

  interface CardType {
    id: number;
    index: number;
    isFlipped: boolean;
    isBlocked: boolean;
    state: string;
  }

  const genCardIndices = (numOfCards: number) =>
    Array.from({ length: Math.floor(numOfCards / 2) }, (_, i) => [i, i])
      .flat()
      .sort(() => Math.random() - 0.5);

  const genCards = (numOfCards: number): CardType[] =>
    genCardIndices(numOfCards).map((cardIndex, index) => ({
      id: index,
      index: cardIndex,
      isFlipped: false,
      isBlocked: false,
      state: CardState.STANDARD,
    }));

  useEffect(() => {
    const savedSize = localStorage.getItem('fieldSize');
    if (savedSize) {
      switch (JSON.parse(savedSize).fieldSize) {
        case '4x3':
          setFieldWidth(4);
          setFieldHeight(3);
          break;
        case '4x4':
          setFieldWidth(4);
          setFieldHeight(4);
          break;
        case '4x5':
          setFieldWidth(4);
          setFieldHeight(5);
          break;
      }
    }

    const savedDifficulty = localStorage.getItem('difficulty');
    if (savedDifficulty) {
      setDifficulty(Number.parseInt(JSON.parse(savedDifficulty).difficulty));
    }

    if (!isGameOver) {
      setCards(genCards(fieldWidth * fieldHeight));

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
    if (numOfPairs >= cards.length && cards.length !== 0) {
      gameWon();
    }
  }, [numOfPairs]);

  const startGame = () => setIsGameOver(false);
  const endGame = () => setIsGameOver(true);
  const gameWon = () => {
    setShowWonWindow(true);
    endGame();
    const savedScore = localStorage.getItem('bestScore');
    if (savedScore) {
      if (JSON.parse(savedScore).bestScore < score) {
        localStorage.setItem('bestScore', JSON.stringify({ bestScore: score }));
      }
    } else {
      localStorage.setItem('bestScore', JSON.stringify({ bestScore: score }));
    }
  };

  const calcScore = () => {
    const newScore =
      numOfPairs * 100 + Math.floor(timerI.getEasternTime() / 1000) - numOfErrors * 5 * difficulty + numOfSeries * 50;
    setScore(newScore);
  };

  const clickHandler = (id: number) => {
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
          setTimeout(() => {
            setCards((newCards) =>
              newCards.map((card, idx) =>
                idx === id || idx === prevId
                  ? { ...card, isFlipped: false, isBlocked: false, state: CardState.STANDARD }
                  : card
              )
            );
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
      <Timer callback={(timerI) => setTimerI(timerI)} timeAmount={5 * 60 * 1000} endTrigger={endGame} />
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
        width={fieldWidth}
        height={fieldHeight}
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
