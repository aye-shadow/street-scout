"use server"

import axios from "axios";
import {MenuItemRequest, MenuItemList, BACKEND_API_URL} from "@/features/vendor";

export async function addMenuItem(vendorId: number, payload: MenuItemRequest): Promise<MenuItemList> {
  try {
    console.log("⚡️addMenuItem", vendorId, payload);
    const { data } = await axios.post<MenuItemList>(
      `${BACKEND_API_URL}/api/vendors/${vendorId}/menu`,
      payload
    );
    return data;
  } catch (error: any) {
    return error.message;
  }
};
