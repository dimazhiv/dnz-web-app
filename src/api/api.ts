import { getUsersData } from './mockServerEndpoint';
import { UserData } from '../types/UserData';

export async function fetchUsersData() {
  let response: UserData[] = [];
  await getUsersData((data: any) => {
    response = data;
  });
  return response;
}
