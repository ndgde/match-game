import React from 'react';
import PropTypes from 'prop-types';
import styles from './Player.module.scss';

const Player = ({ name, score, rank, avatar, className = '', style = {} }) => {
  return (
    <div className={`player ${styles.container} ${className}`} style={style}>
      <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.score}>Score: {score}</p>
        <p className={styles.rank}>Rank: {rank}</p>
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
