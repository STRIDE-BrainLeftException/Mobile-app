import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "./constants";

const login = async (key) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // You might need to include other headers like authorization tokens here
    },
    body: JSON.stringify({ galactic_id: key }),
  };
  const loginEndpoint = BASE_URL + "/api/cms/galactic-auth";
  // Make the fetch request
  return fetch(loginEndpoint, requestOptions).then((response) => {
    if (response.status === 200) {
      const body = response.json();
      const { access, refresh } = body;
      AsyncStorage.setItem("access", access);
      AsyncStorage.setItem("refresh", refresh);
    }
  });
};

export default login;
