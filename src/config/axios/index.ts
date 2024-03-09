import axios from "axios";
import { queryClient } from "../QueryClient";
import { baseURL } from "../../utils/constants/constants";

const baseUrl = baseURL;
axios.defaults.baseURL = baseUrl;
console.log("baseUrl", baseUrl);
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.responseType = "json";

const formatUrl = (url: string, params: any) => {
  if (!params) return url;

  const re = new RegExp("/:(.+?)(/|$)", "g");
  if ((url.match(re) || []).length !== Object.keys(params).length) {
    throw Error("Insufficient (or) excess parameters while formatting API URL");
  }

  return url.replace(re, (...p) => `/${params[p[1]]}${p[2]}`);
};

const apiRequest = async (config: any) => {
  try {
    const { url, urlParams, headers, token } = config;
    config.url = formatUrl(url, urlParams);
    config.headers = { ...headers };

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios(config);
    return Promise.resolve(response);
  } catch (err: any) {
    if (err?.response?.status === 401) {
      queryClient.invalidateQueries("refreshToken");
    }
    return Promise.reject(err);
  }
};

export const removeHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export default apiRequest;
