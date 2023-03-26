import { call, put, takeLatest } from 'redux-saga/effects';

import { NormalizedUsers } from '../../../types/NormalizedUsers';
import { initUsersData } from '../sagaActions';
import { setUsers } from '../slice';

const loadUsers = () => {};
export function* _initUsersData() {
  console.log('----saga racers._initUsersData saga-----');
  try {
    const users = (yield call(loadUsers)) as NormalizedUsers;
    yield put(setUsers(users));
  } catch (error) {
    console.error(error);
  }
}

export function* watchInitUsersData() {
  yield takeLatest(initUsersData.type, _initUsersData);
}
