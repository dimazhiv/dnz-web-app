import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import searchSlice from './features/search/slice';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
  search: searchSlice,
});

export default function setupStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSaga);

  return { store };
}

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
