import React from 'react';
import './Layout.css';

import PropTypes from 'prop-types';

export default function Layout({ header, main }) {
  return (
    <div className="layout">
      {header}
      {main}
    </div>
  );
}

Layout.propTypes = {
  header: PropTypes.element.isRequired,
  main: PropTypes.element.isRequired,
};
