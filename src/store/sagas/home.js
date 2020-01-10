import { put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, Actions } from '../actions/home';

const dummyContacts = [
  { id: 1, name: 'contact1' },
  { id: 2, name: 'contact2' },
];

function* fetchContacts() {
  yield put(Actions.fetchContactsSuccess({ contacts: dummyContacts }));
}

export default function* homeSaga() {
  yield takeLatest(ActionTypes.FETCH_CONTACTS, fetchContacts);
}
