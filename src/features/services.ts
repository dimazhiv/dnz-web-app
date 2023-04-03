import { fetchUsersData } from '../api/api';
import { NormalizedUsers } from '../types/NormalizedUsers';
import { UserData } from '../types/UserData';

export async function loadUsersData(): Promise<NormalizedUsers> {
  try {
    const usersData = await fetchUsersData();
    const userIds = usersData ? usersData.map((item: UserData) => item.id) : [];
    const byId = usersData.reduce((acc: { [key: string]: UserData }, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
    return { byId, userIds };
  } catch (error) {
    throw error;
  }
}
