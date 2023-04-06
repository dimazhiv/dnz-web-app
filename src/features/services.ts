import { fetchUsersData } from '../api/api';
import { NormalizedUsers } from '../types/NormalizedUsers';
import { UserData } from '../types/UserData';

export async function loadUsersData(searchValue): Promise<NormalizedUsers> {
  try {
    const usersData = await fetchUsersData();
    const searchedData = usersData.filter((item) => item.name.includes(searchValue));
    console.log('!!!!!!!!CONSOLE!!!!!!!searchedData!: ', searchedData);

    const userIds = searchedData ? searchedData.map((item: UserData) => item.id) : [];
    const byId = searchedData.reduce((acc: { [key: string]: UserData }, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
    return { byId, userIds };
  } catch (error) {
    throw error;
  }
}
