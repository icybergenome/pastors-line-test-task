import { ActionTypes } from '../actions/home';

const initialState = {
  contacts: [],
  fetchContacts: false,
  fetchContactsSuccess: false,
  fetchContactsFailure: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CONTACTS:
      return {
        ...state,
        fetchContacts: true,
        fetchContactsSuccess: false,
        fetchContactsFailure: false,
      };
    case ActionTypes.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        fetchContacts: false,
        fetchContactsSuccess: true,
        fetchContactsFailure: false,
        contacts: action.payload.contacts,
      };
    case ActionTypes.FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        fetchContacts: false,
        fetchContactsSuccess: false,
        fetchContactsFailure: true,
      };

    default:
      return state;
  }
};
