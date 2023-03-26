import { getUsersData } from './mockServerEndpoint';

export async function fetchUsersData() {
  let response;
  try {
    await getUsersData((data) => {
      response = data;
    });
    return response;
  } catch (error) {
    throw error;
  }
}
//
// export async function loadPhotosList(): Promise<NormalizedPhotos> {
//   try {
//     const photos = await fetchPhotosList();
//     const photosIds = photos ? photos.map((item) => item.id) : [];
//     const byId = photos.reduce((acc: { [key: string]: PhotoData }, item) => {
//       acc[item.id] = item;
//       return acc;
//     }, {});
//     return { byId, photosIds };
//   } catch (error) {
//     throw error;
//   }
// }
