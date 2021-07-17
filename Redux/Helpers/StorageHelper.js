import { AsyncStorage } from 'react-native';

export const setUserName = (key, value) => AsyncStorage.setItem(key, value);
export const getUserName = (key) => AsyncStorage.getItem(key);
