export const ActionTypes = {
  FETCH_CONTACTS: 'actions/home/FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS: 'actions/home/FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_FAILURE: 'actions/home/FETCH_CONTACTS_FAILURE',
};

const fetchContacts = payload => {
  return {
    type: ActionTypes.FETCH_CONTACTS,
    payload,
  };
};

const fetchContactsSuccess = payload => {
  return {
    type: ActionTypes.FETCH_CONTACTS_SUCCESS,
    payload,
  };
};

const fetchContactsFailure = payload => {
  return {
    type: ActionTypes.FETCH_CONTACTS_FAILURE,
    payload,
  };
};

export const Actions = {
  fetchContacts,
  fetchContactsSuccess,
  fetchContactsFailure,
};
