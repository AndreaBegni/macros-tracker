import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

const mergeData = async (key, value) => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

const mergeObjectToArray = async (key, value) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    const array = jsonValue != null ? JSON.parse(jsonValue) : [];
    array.push(value);
    await AsyncStorage.setItem(key, JSON.stringify(array));
  } catch (e) {
    console.log(e);
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};

export { storeData, getData, mergeData, removeData, mergeObjectToArray };
