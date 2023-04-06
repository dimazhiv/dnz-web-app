import { getPositionData, getUsersData } from './mockServerEndpoint';
import { UserData } from '../types/UserData';
import { UserPosition } from '../types/UserPosition';

export async function fetchUsersData() {
  let responseUsers: UserData[] = [];
  let responsePositions: UserPosition[] = [];
  await getUsersData((data: any) => {
    responseUsers = data;
  });
  await getPositionData((data: any) => {
    responsePositions= data;
  });


  return responseUsers;
}
