import AsyncStorage from "@react-native-async-storage/async-storage";

const authFetch = async () => {
  const value = await AsyncStorage.getItem("my-key");
  return fetch();
};
