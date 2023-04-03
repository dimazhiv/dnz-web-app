import { createAction } from '@reduxjs/toolkit';

import { NAME } from './constants';

export const initUsersData = createAction(`${NAME}/INIT_USERS_DATA`);
export const onSearchPress = createAction<string>(`${NAME}/ON_SEARCH_PRESS`);
