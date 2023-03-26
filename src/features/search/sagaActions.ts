import { createAction } from '@reduxjs/toolkit';
import { NAME } from './constants';

export const initUsersData = createAction(`${NAME}/INIT_USERS_DATA`);
