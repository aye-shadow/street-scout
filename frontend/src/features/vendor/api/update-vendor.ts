import axios from "axios";

export async function updateVendor() {
  try {
    const { data } = await axios.get<any>(`/api/vendor/update-vendor`,
    );
    return data;
  } catch (error: any) {
    return error.message;
  }
};
