import plugins from "../plugins";

const api = plugins.http.api;

export const login = async ({ email, password }) => {
  const {
    data: { token },
  } = await api.post("/auth/login", { email, password });

  localStorage.setItem("token", token);

  return token;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const register = async ({ name, email, password }) => {
  await api.post("/user", { name, email, password });

  await login({ email, password });
};

export const me = async () => {
  const { data } = await api.get(`/user/me`);

  return data;
};
