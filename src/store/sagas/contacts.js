import { call, put, takeLatest, select } from 'redux-saga/effects';
import { ActionTypes, Actions } from '../actions/contacts';
import { getContacts } from '../../service/contacts';
import { getContactsState } from '../selectors/contacts';

const parseContactsData = (contacts, existingData) => {
  const data = Object.keys(contacts).map(key => {
    const row = {};
    const contact = contacts[key];
    row.id = { header: 'id', value: contact.id };
    row.first_name = { header: 'First Name', value: contact.first_name };
    row.last_name = { header: 'First Name', value: contact.last_name };
    row.email = { header: 'Email', value: contact.email };
    row.phone_number = { header: 'Phone Number', value: contact.phone_number };
    return row;
  });
  return [...data, ...existingData];
};

function* fetchContacts(action) {
  try {
    const state = yield select(getContactsState);
    console.log('@@@@@', action, state.contacts);
    const data = yield call(getContacts, { ...action.payload });
    const { contacts } = data;
    const parsedData = parseContactsData(contacts, state.contacts);
    yield put(Actions.fetchContactsSuccess({ contacts: parsedData }));
  } catch (err) {
    yield put(Actions.fetchContactsFailure());
  }
}

export default function* homeSaga() {
  yield takeLatest(ActionTypes.FETCH_CONTACTS, fetchContacts);
}
