import { all, call } from 'redux-saga/effects';

import { saga as searchSaga } from './features/search';

function* rootSaga() {
  yield all([call(searchSaga)]);
}

export default rootSaga;
