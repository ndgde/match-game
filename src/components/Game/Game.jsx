import React, { Component } from 'react';
import './Game.css';

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
    const { score, isGameOver } = this.state;

    return (
      <div className="game-container">
        <h1>Игра</h1>
        <div className="score">Очки: {score}</div>
        {isGameOver ? (
          <div className="game-over">
            <h2>Игра окончена!</h2>
            <button onClick={this.startGame}>Начать заново</button>
          </div>
        ) : (
          <button onClick={this.increaseScore}>Увеличить очки</button>
        )}
      </div>
    );
  }
}

export default Game;
