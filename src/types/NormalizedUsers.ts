import { ById, UserIds } from './Types';
import { UserData } from './UserData';

export interface NormalizedUsers {
  byId: ById<UserData>;
  userIds: UserIds;
}
