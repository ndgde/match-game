import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Main.module.scss';
import Wrapper from '../Wrapper/Wrapper';

const Main = ({ children }) => {
  return (
    <main className={`main`}>
      <Wrapper>{children}</Wrapper>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.element,
};

export default Main;
