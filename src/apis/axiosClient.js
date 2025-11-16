import axios from "axios";

const apilocal = import.meta.env.VITE_DB_URL_LOCAL;
const apiRender = import.meta.env.VITE_DB_URL_RENDER;

// Select baseURL depending on environment mode.
// In development use local API, otherwise use render/prod URL.
const getBaseURL = () => {
  try {
    const mode = import.meta.env.MODE; // 'development' or 'production'
    if (mode === "development") return apilocal;
    return apiRender || apilocal;
  } catch (err) {
    return apilocal;
  }
};

const axiosClient = axios.create({
  baseURL: getBaseURL(),
  timeout: 30000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosClient;
