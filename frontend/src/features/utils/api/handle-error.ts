import axios, {AxiosError} from "axios";

export function handleError<E extends Error>(error: E) {
  if (axios.isAxiosError(error)) {
    console.error("Axios Error:", (error as AxiosError).message);
    return (error as AxiosError).response?.data || "Unknown error"
  }

  console.error("Unhandled Error:", error);
  return error.message || "Unhandled error"
};
