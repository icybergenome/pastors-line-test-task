import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const ModalElem = ({
  open,
  headerText,
  onClose,
  children,
  onScroll,
  forwardRef,
}) => {
  return (
    <Modal.Dialog onScroll={onScroll}>
      <Modal show={open} onHide={onClose} id="ding">
        <Modal.Header ref={forwardRef}>
          <Modal.Title>{headerText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <div>Footer</div>
        </Modal.Footer>
      </Modal>
    </Modal.Dialog>
  );
};

ModalElem.propTypes = {
  open: PropTypes.bool.isRequired,
  headerText: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  onScroll: PropTypes.func,
};

ModalElem.defaultProps = {
  headerText: 'Modal',
  onScroll: () => {},
};

export default ModalElem;
