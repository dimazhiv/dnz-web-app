import { POSITIONS, USERS } from './mockData';

export function getUsersData(callback) {
  if (callback) callback(getData(USERS));
}

export function getPositionData(callback) {
  if (callback) callback(getData(POSITIONS));
}

function getData(data) {
  return new Promise((fn) => {
    setTimeout(() => {
      fn(data);
    }, Math.random() * 300);
  });
}
