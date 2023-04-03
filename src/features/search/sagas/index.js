import { all, call } from 'redux-saga/effects';

import { watchInitUsersData } from './initUsersData.ts';
import { watchOnSearchPress } from './onSearchPress.ts';

export default function* searchSaga() {
  yield all([call(watchInitUsersData), call(watchOnSearchPress)]);
}
