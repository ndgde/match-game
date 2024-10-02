import React from 'react';
import './Layout.css';
import Main from '../Main/Main';
import PropTypes from 'prop-types';

export default function Layout({ header, content }) {
  return (
    <div className="layout">
      {header}
      <Main>{content}</Main>
    </div>
  );
}

Layout.propTypes = {
  header: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
};
