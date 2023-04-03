import { call, put, takeLatest } from 'redux-saga/effects';

import { NormalizedUsers } from '../../../types/NormalizedUsers';
import { loadUsersData } from '../../services';
import { initUsersData } from '../sagaActions';
import { setUsers } from '../slice';

export function* _initUsersData() {
  console.log('----saga racers._initUsersData saga-----');
  try {
    const users = (yield call(loadUsersData)) as NormalizedUsers;
    yield put(setUsers(users));
  } catch (error) {
    console.error(error);
  }
}

export function* watchInitUsersData() {
  yield takeLatest(initUsersData.type, _initUsersData);
}
