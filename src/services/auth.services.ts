import { decodeToken } from "../utils/jwt.decode";
import { getFromLocalStorage } from "../utils/local-storage";

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("accessToken");
  if (authToken) {
    const decodedData = decodeToken(authToken);
    return decodedData;
  }
};

export const isLogging = () => {
  const authToken = getFromLocalStorage("accessToken");
  if (!authToken) {
    return !!authToken;
  }
};
