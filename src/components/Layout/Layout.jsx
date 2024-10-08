import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.scss';
import Main from '../Main/Main';

export default function Layout({ header, content }) {
  return (
    <div className={styles.layout}>
      {header}
      <Main>{content}</Main>
    </div>
  );
}

Layout.propTypes = {
  header: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
};
