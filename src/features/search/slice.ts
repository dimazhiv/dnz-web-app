import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ById, UserIds } from '../../types/Types';
import { UserData } from '../../types/UserData';

export interface SearchState {
  userIds: UserIds;
  byId: ById<UserData>;
}

const initialState: SearchState = {
  userIds: [],
  byId: {},
};

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<{ byId: ById<UserData>; userIds: UserIds }>) => {
      const { byId, userIds } = action.payload;
      state.userIds = userIds;
      state.byId = byId;
    },
  },
});

export const { setUsers } = slice.actions;
export default slice.reducer;
