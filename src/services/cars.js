import plugins from "../plugins";

const api = plugins.http.api;

export const createCar = async ({ model, price, description, photo }) => {
  const { data } = await api.post("/car", { model, price, description, photo });

  return data;
};

export const findCar = async ({ id }) => {
  return api.get(`/car/${id}`);
};

export const getAll = async () => {
  return api.get("/car");
};

export const deleteCar = async ({ id }) => {
  return api.delete(`/car/${id}`);
};
