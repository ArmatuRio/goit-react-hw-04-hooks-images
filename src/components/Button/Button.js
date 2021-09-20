import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ onClick, length }) => (
  <button type="button" onClick={onClick} className={styles.Button}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
