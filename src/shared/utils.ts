import AsyncStorage from '@react-native-async-storage/async-storage';

export function validateEmail(email: string): boolean {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validatePassword(password: string): boolean {
  return password.length >= 6;
}

export const storeUserInfo = async (name: string): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(name);
    await AsyncStorage.setItem('userInfo', jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getUserInfo = async (): Promise<string | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem('userInfo');
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    return null;
  }
};

export const deleteUserInfo = async (): Promise<boolean | null> => {
  try {
    await AsyncStorage.removeItem('userInfo');
    return true;
  } catch (e) {
    return null;
  }
};
