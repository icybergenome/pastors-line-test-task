import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { Form } from 'react-bootstrap';
import { getContactsState } from '../../store/selectors/contacts';
import { Actions } from '../../store/actions/contacts';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Table/Table';
import Button from '../../components/Button/Button';
import styles from './Contact.module.scss';

const Contacts = ({ contactTypes }) => {
  /* Local State */
  const [page, setPage] = useState(1);
  const [countryId, setCountryId] = useState();
  const [evenCheck, setEvenCheck] = useState(false);
  const [query, setQuery] = useState('');

  /* Redux State */
  const { contacts } = useSelector(state => getContactsState(state));

  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (contactTypes === 'all') {
      dispatch(Actions.resetData());
      dispatch(Actions.fetchContacts({ page: 1 }));
    } else if (contactTypes === 'us') {
      dispatch(Actions.resetData());
      dispatch(Actions.fetchContacts({ page: 1, countryId: 226 }));
      setCountryId(226);
    }
  }, [contactTypes, dispatch]);

  useEffect(() => {
    setPage(1);
    dispatch(Actions.resetData());
    dispatch(Actions.fetchContacts({ page: 1, countryId: 226, query }));
  }, [query]);

  const fetchAllContentOnScroll = () => {
    // Checks that the page has scrolled to the bottom
    if (modalRef && modalRef.current) {
      const node = modalRef.current.parentNode.parentNode.parentNode;
      if (node.scrollTop + node.clientHeight >= node.scrollHeight) {
        dispatch(Actions.fetchContacts({ page: page + 1, countryId, query }));
        setPage(page + 1);
      }
    }
  };

  const deboucedScroll = debounce(fetchAllContentOnScroll, 1000);

  const navAllContacts = () => history.push('/all-contacts');
  const navUSContacts = () => history.push('/us-contacts');
  const navCloseContacts = () => history.push('/');
  const handleCheck = () => {
    dispatch(Actions.filterEven(!evenCheck));
    setEvenCheck(!evenCheck);
  };
  const handleSearch = val => {
    setQuery(val);
  };
  const searchDebounce = debounce(handleSearch, 1000);

  return (
    <Modal
      open
      onClose={() => {}}
      headerText={contactTypes === 'us' ? 'US Contacts' : 'All Contacts'}
      onScroll={deboucedScroll}
      forwardRef={modalRef}
      evenCheck={evenCheck}
      handleCheck={handleCheck}
    >
      <div className={styles.buttonsContainer}>
        <Button className="buttonA" onClick={navAllContacts}>
          All Contact
        </Button>
        <Button className="buttonB" onClick={navUSContacts}>
          US Contact
        </Button>
        <Button className="buttonC" onClick={navCloseContacts}>
          Close
        </Button>
      </div>
      <Form.Group controlId="searchbar">
        <Form.Control
          type="text"
          placeholder="Search...."
          onChange={e => searchDebounce(e.target.value)}
        />
      </Form.Group>
      <Table tableData={contacts} />
    </Modal>
  );
};

Contacts.propTypes = {
  contactTypes: PropTypes.oneOf(['all', 'us']).isRequired,
};

export default Contacts;
