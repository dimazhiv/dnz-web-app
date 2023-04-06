import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { NormalizedUsers } from '../../../types/NormalizedUsers';
import { loadUsersData } from '../../services';
import { onSearchPress } from '../sagaActions';
import { setUsers } from '../slice';

export function* _onSearchPress({ payload }: PayloadAction<string>) {
  console.log('----saga racers._onSearchPress saga-----', payload);
  const users = (yield call(loadUsersData, payload)) as NormalizedUsers;
  yield put(setUsers(users));
}

export function* watchOnSearchPress() {
  yield takeLatest(onSearchPress.type, _onSearchPress);
}
