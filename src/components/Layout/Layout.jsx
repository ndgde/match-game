import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.element,
};
