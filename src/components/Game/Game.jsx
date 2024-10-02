import React, { Component } from 'react';
import './Game.css';
import Grid from '../Grid/Grid';
import Card from '../Card/Card';

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
        <Grid
          cards={[
            <Card key={1} id={1} isFlipped={true} img={process.env.PUBLIC_URL + '/card-imgs/img-1.png'} />,
            <Card key={2} id={2} isFlipped={false} img={process.env.PUBLIC_URL + '/card-imgs/img-2.png'} />,
            <Card key={3} id={3} isFlipped={false} img={process.env.PUBLIC_URL + '/card-imgs/img-3.png'} />,
            <Card key={4} id={4} isFlipped={true} img={process.env.PUBLIC_URL + '/card-imgs/img-4.png'} />,
          ]}></Grid>
      </div>
    );
  }
}

export default Game;
