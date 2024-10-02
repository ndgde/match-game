import React from 'react';
import './Main.css';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper/Wrapper';

const Main = ({ children }) => {
  return (
    <main>
      <Wrapper>{children}</Wrapper>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.element,
};

export default Main;
