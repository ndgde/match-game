import React from 'react';
import PropTypes from 'prop-types';
import './Player.css';

const Player = ({ name, score, rank, avatar, className = '', style = {} }) => {
  return (
    <div className={`player ${className}`} style={style}>
      <img src={avatar} alt={`${name}'s avatar`} className="player-avatar" />
      <div className="player-info">
        <h3 className="player-name">{name}</h3>
        <p className="player-score">Score: {score}</p>
        <p className="player-rank">Rank: {rank}</p>
      </div>
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Player;
