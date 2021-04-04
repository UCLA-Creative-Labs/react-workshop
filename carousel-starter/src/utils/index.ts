export interface Profile {
  name: string;
  position: string;
  hobby: string;
}

export function saveNumberToStorage(num: number) {
  window.localStorage.setItem('num', num.toString());
}

export function getNumberFromStorage(): number {
  return Number.parseInt(window.localStorage.getItem('num') ?? '0');
}
