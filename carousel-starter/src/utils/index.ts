export interface Profile {
  name: string;
  position: string;
  hobby: string;
}

function saveNumberToStorage(num: number) {
  window.localStorage.setItem('num', num.toString());
}

function getNumberFromStorage(): number {
  return Number.parseInt(window.localStorage.getItem('num') ?? '0');
}

export default {
  saveNumberToStorage, getNumberFromStorage
}
