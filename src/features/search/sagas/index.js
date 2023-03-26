import { all, call } from 'redux-saga/effects';

import { watchInitUsersData } from './initUsersData.ts';

export default function* searchSaga() {
  yield all([call(watchInitUsersData)]);
}
