import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Home.module.scss';

export default () => {
  const history = useHistory();

  const navAllContacts = () => history.push('/all-contacts');
  const navUSContacts = () => history.push('/us-contacts');

  return (
    <div className={styles.container}>
      <Button onClick={navAllContacts} className="buttonA">
        All Contacts
      </Button>
      <Button onClick={navUSContacts} className="buttonB">
        US Contacts
      </Button>
    </div>
  );
};
