export const ActionTypes = {
  FETCH_CONTACTS: 'actions/home/FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS: 'actions/home/FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_FAILURE: 'actions/home/FETCH_CONTACTS_FAILURE',
  RESET_DATA: 'actions/home/RESET_DATA',
  FILTER_EVEN: 'actions/home/FILTER_EVEN',
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

const resetData = () => {
  return {
    type: ActionTypes.RESET_DATA,
  };
};

const filterEven = payload => {
  return {
    type: ActionTypes.FILTER_EVEN,
    payload,
  };
};

export const Actions = {
  fetchContacts,
  fetchContactsSuccess,
  fetchContactsFailure,
  resetData,
  filterEven,
};
