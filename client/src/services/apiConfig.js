import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://feedable-app.herokuapp.com/api",
  development: "https://feedable-app.herokuapp.com/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}
const api = axios.create({
  baseURL: apiUrl,
});

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};
api.interceptors.request.use(
  async function (options) {
    options.headers["Authorization"] = await getToken();
    return options;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;
