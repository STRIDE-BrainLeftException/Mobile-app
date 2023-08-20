import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "./constants";

export const authFetch = async (url, method, body) => {
  const value = await AsyncStorage.getItem("my-key");
  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Authorization", value);

  return fetch(`${BASE_URL}/${url}`, { method, headers, body });
};
