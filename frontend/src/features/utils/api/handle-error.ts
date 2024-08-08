import axios from "axios";

export function handleError(error: any) {
  if (axios.isAxiosError(error)) {
    console.error("Axios Error:", error.message);
    return error.response?.data || "Unknown error"
  }

  console.error("Unhandled Error:", error);
  return error.message || "Unhandled error"
};
