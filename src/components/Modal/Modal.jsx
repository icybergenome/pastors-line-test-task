import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const ModalElem = ({
  open,
  headerText,
  onClose,
  children,
  onScroll,
  forwardRef,
  handleCheck,
  evenCheck,
  closeBtn,
}) => {
  return (
    <Modal.Dialog onScroll={onScroll}>
      <Modal show={open} onHide={onClose}>
        <Modal.Header ref={forwardRef} closeButton={closeBtn}>
          <Modal.Title>{headerText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer className={styles.footer}>
          {handleCheck && (
            <Form.Group controlId="footerCheckbox">
              <Form.Check
                type="checkbox"
                label="Only even"
                checked={evenCheck}
                onChange={handleCheck}
              />
            </Form.Group>
          )}
        </Modal.Footer>
      </Modal>
    </Modal.Dialog>
  );
};

ModalElem.propTypes = {
  open: PropTypes.bool.isRequired,
  headerText: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.any.isRequired,
  onScroll: PropTypes.func,
  handleCheck: PropTypes.func,
  evenCheck: PropTypes.bool,
  closeBtn: PropTypes.bool,
};

ModalElem.defaultProps = {
  headerText: 'Modal',
  onScroll: () => {},
  handleCheck: null,
  evenCheck: false,
  onClose: () => {},
  closeBtn: false,
};

export default ModalElem;
