import React from 'react';
import styles from './Player.module.scss';

interface PlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  score: number;
  email: string;
  avatar: string;
  style?: React.CSSProperties;
}

const Player: React.FC<PlayerProps> = ({ name, score, email, avatar, className = '', style = {} }) => {
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

export default Player;
