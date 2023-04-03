import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

import { initUsersData, onSearchPress } from '../sagaActions';

export function* _onSearchPress({ payload }: PayloadAction<string>) {
  console.log('----saga racers._onSearchPress saga-----', payload);
  yield put(initUsersData());
}

export function* watchOnSearchPress() {
  yield takeLatest(onSearchPress.type, _onSearchPress);
}
