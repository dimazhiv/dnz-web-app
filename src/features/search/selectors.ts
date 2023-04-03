import { NAME } from './constants';
import { RootStateType } from '../../setupStore';
import { ById, UserIds } from '../../types/Types';
import { UserData } from '../../types/UserData';

export const getUsers = (state: RootStateType): ById<UserData> => state[NAME].byId;
export const getUserIds = (state: RootStateType): UserIds => state[NAME].userIds;
//
//
// export const getSearchedUserIds = (state: RootStateType): userIDs\\ => {
//   const currentPage = getCurrentPage(state);
//   const driversIds = getDriversIds(state);
//   const currentOffset = currentPage * DRIVERS_NUMBER_LIMIT;
//   return driversIds.length ? driversIds.slice(currentOffset - DRIVERS_NUMBER_LIMIT, currentOffset) : [];
// };
//
export const getUserById = (state: RootStateType, userId: string): UserData | { name: null, id: null } => {
  const users = getUsers(state);
  return users ? users[userId] : { name: null, id: null };
};
