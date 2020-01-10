import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHome } from '../../store/selectors/home';
import { Actions } from '../../store/actions/home';
import Div from '../../components/Div/Div';

export default () => {
  const { contacts, fetchContacts } = useSelector(state => getHome(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetchContacts) {
      dispatch(Actions.fetchContacts());
    }
  }, [fetchContacts, dispatch]);

  return (
    <>
      {contacts.map((contact, index) => (
        <Div key={index}>{contact.name}</Div>
      ))}
    </>
  );
};
