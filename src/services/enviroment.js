import axios from "axios";
import plugins from "../plugins";

const URL = "/endpoints.json";

const api = axios.create();

const getEnv = async () => {
  const { data } = await api.get(URL);

  plugins.http.install(data);
};

const serviceModules = {
  getEnv,
};

export default serviceModules;
