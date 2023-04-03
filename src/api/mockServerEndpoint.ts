import { POSITIONS, USERS } from './mockData';

export function getUsersData(callback: any) {
  if (callback) callback(getData(USERS));
}

export function getPositionData(callback: any) {
  if (callback) callback(getData(POSITIONS));
}

function getData(data: any) {
  return new Promise((fn) => {
    setTimeout(() => {
      fn(data);
    }, Math.random() * 300);
  });
}
