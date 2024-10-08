/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import styles from './Game.module.scss';
import Grid from '../Grid/Grid';
import Card from '../Card/Card';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameOver: true,
      cards: [],
      prevId: null,
      prevCallback: null,
      timer: {},
      namespace: '',
    };
    this.score = 0;
  }

  generateCards = (numOfCards) => {
    const cards = Array.from({ length: Math.floor(numOfCards / 2) }, (_, i) => [i, i])
      .flat() /* returns [0, 0, 1, 1, 2, 2, ...] */
      .sort(() => Math.random() - 0.5); /* random arrangement of card ids */

    console.log(cards);

    return cards;
  };

  startGame = () => {
    this.setState({
      prevId: null,
      prevCallback: null,
      isGameOver: false,
      cards: this.generateCards(12),
      namespace: uuidv4(),
    });

    this.score = 0;

    this.state.timer.resetTimer();
    this.state.timer.startTimer();
  };

  endGame = () => {
    this.setState({ isGameOver: true });
    this.state.timer.stopTimer();
  };

  increaseScore = () => {
    this.score += 2; /* two cards at a time */
    console.log(this.score);

    if (this.score >= this.state.cards.length) {
      this.endGame();
    }
  };

  cardClickHandler = (id, callback) => {
    if (this.state.prevId !== null) {
      if (id == this.state.prevId) {
        [callback, this.state.prevCallback].forEach((func) => func(true));
        this.increaseScore();
      } else {
        [callback, this.state.prevCallback].forEach((func) => func(false));
      }

      this.setState({ prevId: null, prevCallback: null });
    } else {
      this.setState({ prevId: id, prevCallback: callback });
    }

    this.forceUpdate();
  };

  render() {
    return (
      <div className={`game ${styles.container}`}>
        <Timer callback={(timer) => this.setState({ timer: timer })} onMilliseconds={true} />
        {this.state.isGameOver ? (
          <Button className={styles.game_btn} onClick={this.startGame}>
            New Game
          </Button>
        ) : (
          <Button className={styles.game_btn} onClick={this.endGame}>
            Stop Game
          </Button>
        )}
        <Grid
          // width={4}
          // height={3}
          cards={this.state.cards.map((cardId) => (
            <Card id={cardId} callback={this.cardClickHandler} isGameActive={!this.state.isGameOver} />
          ))}
          namespace={this.state.namespace}
        />
      </div>
    );
  }
}

export default Game;
