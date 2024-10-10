import React from 'react';
import PropTypes from 'prop-types';
import styles from './Player.module.scss';

const Player = ({ name, score, email, avatar, className = '', style = {} }) => {
  return (
    <div className={`player ${styles.container} ${className}`} style={style}>
      <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} />
      <div className={styles.info}>
        <div className={styles.left_section}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.email}>{email}</p>
        </div>
        <div className={styles.right_section}>
          <p className={styles.score}>
            Score: <span className={styles.score_value}>{score}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Player;
