import axios, {AxiosError} from "axios";

export function handleError(error: any) {
  if (axios.isAxiosError(error)) {
    console.error("Axios Error:", (error as AxiosError).message);
    return (error as AxiosError).response?.data || "Unknown error"
  }

  console.error("Unhandled Error:", error);
  return error.message || "Unhandled error"
};
