import axios, {AxiosError} from "axios";

export function handleError(error: any) {
  if (axios.isAxiosError(error)) {
    const e = (error as AxiosError);
    console.error("Axios Error:", e.message, e.status, e.response?.data);
    return e.response?.data || "Unknown error"
  }

  console.error("Unhandled Error:", error);
  return error.message || "Unhandled error"
};
