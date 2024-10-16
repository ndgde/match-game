import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navigation.module.scss';
import Button from '../../Button/Button';

interface NavigationItem {
  path: string;
  authRequired: boolean;
  img: string;
  text: string;
}

interface NavigationProps {
  items: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string, authRequired: boolean) => {
    if (authRequired) {
      if (localStorage.getItem('authToken')) {
        navigate(path);
      } else {
        navigate('/about');
      }
    } else {
      navigate(path);
    }
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {items.map(({ path, authRequired, img, text }, index) => (
          <li key={index} className={styles.item}>
            <Button className={styles.sign_btn} onClick={() => handleNavigation(path, authRequired)}>
              <div className={styles.title_container}>
                <img className={styles.title_sign} src={img} alt={`${text} img`} rel="preload" />
              </div>
            </Button>
            <p className={styles.text}>{text}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
