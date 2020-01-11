import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { Scrollbars } from 'react-custom-scrollbars';
import { getContactsState } from '../../store/selectors/contacts';
import { Actions } from '../../store/actions/contacts';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Table/Table';
import Button from '../../components/Button/Button';
import styles from './Contact.module.scss';

const Contacts = ({ contactTypes }) => {
  const [page, setPage] = useState(1);
  const [countryId, setCountryId] = useState();
  const [fetchData, setFetchData] = useState(false);
  const { fetchContacts, contacts } = useSelector(state =>
    getContactsState(state),
  );
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (contactTypes === 'all') {
      console.log('#######');
      dispatch(Actions.fetchContacts({ page: 1 }));
    } else if (contactTypes === 'us') {
      console.log('*****');
      dispatch(Actions.fetchContacts({ page: 1, countryId: 226 }));
      setCountryId(226);
    }
  }, [contactTypes, dispatch]);

  useEffect(() => {
    if (fetchData && !fetchContacts) {
      dispatch(Actions.fetchContacts({ page, countryId }));
    }

    if (fetchContacts) {
      setFetchData(false);
    }
  }, [fetchData, fetchContacts, dispatch]);

  const fetchAllContentOnScroll = () => {
    debounce(() => {
      // Checks that the page has scrolled to the bottom
      if (modalRef && modalRef.current) {
        const node = modalRef.current.parentNode.parentNode.parentNode;
        if (node.scrollTop + node.clientHeight >= node.scrollHeight) {
          setPage(page + 1);
          setFetchData(true);
        }
      }
    }, 1000)();
  };

  const navAllContacts = () => history.push('/all-contacts');
  const navCloseContacts = () => history.push('/');

  return (
    <Modal
      open
      onClose={() => {}}
      headerText={contactTypes === 'us' ? 'US Contacts' : 'All Contacts'}
      onScroll={fetchAllContentOnScroll}
      forwardRef={modalRef}
    >
      <div className={styles.buttonsContainer}>
        <Button className="buttonA" onClick={navAllContacts}>
          All Contact
        </Button>
        <Button className="buttonB">US Contact</Button>
        <Button className="buttonC" onClick={navCloseContacts}>
          Close
        </Button>
      </div>
      <Table tableData={contacts} />
    </Modal>
  );
};

Contacts.propTypes = {
  contactTypes: PropTypes.oneOf(['all', 'us']).isRequired,
};

export default Contacts;
