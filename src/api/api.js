import axios from "axios";
const instance = axios.create({
  baseURL: "https://readjourney.b.goit.study/api/",
});
export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};
export const requestSignUp = async (formData) => {
  console.log(formData);
  const { data } = await instance.post("users/signup", formData);
  console.log(data);
  setToken(data.token);
  console.log(data.token);
  return data;
};
export const requestSignIn = async (formData) => {
  const { data } = await instance.post("/users/signin", formData);
  setToken(data.token);
  return data;
};

export const requestGetCurrentUser = async () => {
  const { data } = await instance.get("/users/current");

  return data;
};
export const requestRefreshToken = async () => {
  const { data } = await instance.get("/users/current/refresh");
  return data; // Возвращает { token, refreshToken }
};
export const requestLogOut = async () => {
  const { data } = await instance.post("/users/signout");

  return data;
};
