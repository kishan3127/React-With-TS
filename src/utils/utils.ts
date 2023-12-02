// import { BASE_URL } from './constants';

export const setLocalStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string) => {
  return JSON.parse(window.localStorage.getItem(key) || "{}");
};

export const removeItemFromStorage = (key: string) => {
  window.localStorage.removeItem(key);
};

export const isMobileView = () => {
  return window?.innerWidth < 1200;
};
