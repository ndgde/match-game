/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import './Game.css';
import Grid from '../Grid/Grid';
import Card from '../Card/Card';
// import { CardState } from '../Card/Card';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      isGameOver: true,
      cards: [],
      prevId: null,
      prevCallback: null,
      time: new Date(),
    };
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
      score: 0,
      isGameOver: false,
      cards: this.generateCards(12),
    });
  };

  endGame = () => {
    this.setState({
      score: 0,
      isGameOver: true,
      cards: [],
      prevId: null,
      prevCallback: null,
    });
  };

  increaseScore = () => {
    this.setState({ score: this.state.score + 2 }); /* two cards at a time */

    if (this.state.score >= this.state.cards.length) {
      this.endGame();
    }
  };

  cardClickHandler = (id, callback) => {
    if (this.state.prevId !== null) {
      if (id == this.state.prevId) {
        [callback, this.state.prevCallback].forEach((func) => func(true));
      } else {
        [callback, this.state.prevCallback].forEach((func) => func(false));
      }

      this.setState({ prevId: null, prevCallback: null });
      console.log(this.state.prevId, id);
    } else {
      this.setState({ prevId: id, prevCallback: callback });
    }

    this.forceUpdate();
  };

  render() {
    return (
      <div className="game-container">
        <Timer initialTime={this.state.time} />
        {this.state.isGameOver ? (
          <Button onClick={this.startGame}>New Game</Button>
        ) : (
          <Button onClick={this.endGame}>Stop Game</Button>
        )}
        <Grid
          // width={4}
          // height={3}
          cards={this.state.cards.map((cardId) => (
            <Card id={cardId} callback={this.cardClickHandler} />
          ))}
        />
      </div>
    );
  }
}

export default Game;
