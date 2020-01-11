import { createSelector } from 'reselect';

const contactsSelector = state => state.contacts;

export const getContactsState = createSelector(
  contactsSelector,
  contacts => contacts,
);
