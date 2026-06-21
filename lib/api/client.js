import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!baseURL && typeof window !== "undefined") {
  console.warn(
    "[api] NEXT_PUBLIC_API_BASE_URL is not set. API calls will fail.",
  );
}

const client = axios.create({
  baseURL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

client.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const status = err.response?.status ?? 0;
    const message =
      err.response?.data?.message ||
      err.response?.data?.error ||
      err.message ||
      "Request failed";
    return Promise.reject({ status, message, raw: err });
  },
);

export default client;
