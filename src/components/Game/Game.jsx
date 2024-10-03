/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import './Game.css';
import Grid from '../Grid/Grid';
import Card from '../Card/Card';
import { CardState } from '../Card/Card';
import Timer from '../Timer/Timer';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      isGameOver: false,
    };
  }

  startGame = () => {
    this.setState({ score: 0, isGameOver: false });
  };

  endGame = () => {
    this.setState({ isGameOver: true });
  };

  increaseScore = () => {
    if (!this.state.isGameOver) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
  };

  render() {
    return (
      <div className="game-container">
        <Timer initialTime={new Date()} />
        <h1>Игра</h1>
        <Grid
          width={4}
          height={3}
          cards={[
            <Card id={0} isBlocked={false} state={CardState.STANDARD} />,
            <Card id={1} isBlocked={false} state={CardState.CORRECT} />,
            <Card id={2} isBlocked={false} state={CardState.INCORRECT} />,
            <Card id={3} isBlocked={false} />,
            <Card id={4} isBlocked={false} />,
            <Card id={5} isBlocked={false} />,
            <Card id={0} isBlocked={false} />,
            <Card id={1} isBlocked={false} />,
            <Card id={2} isBlocked={false} />,
            <Card id={3} isBlocked={false} />,
            <Card id={4} isBlocked={false} />,
            <Card id={5} isBlocked={false} />,
          ]}></Grid>
      </div>
    );
  }
}

export default Game;
