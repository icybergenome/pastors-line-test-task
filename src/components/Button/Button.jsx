import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const ButtonComponent = ({ variant, onClick, children, className }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={`${styles.button} ${styles[className]}`}
    >
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning']),
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

ButtonComponent.defaultProps = {
  variant: 'primary',
  onClick: () => {},
  className: '',
};

export default ButtonComponent;
