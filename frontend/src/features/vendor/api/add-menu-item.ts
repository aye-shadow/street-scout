"use server"

import axios from "axios";
import {BACKEND_API_URL, MenuItemList, MenuItemRequest} from "@/features/vendor";
import {handleError} from "src/features/lib";

export async function addMenuItem(vendorId: number, payload: MenuItemRequest): Promise<MenuItemList> {
  try {
    console.log("⚡️addMenuItem", vendorId, payload);
    const { data } = await axios.post<MenuItemList>(
      `${BACKEND_API_URL}/api/vendors/${vendorId}/menu`,
      payload
    );
    return data;
  } catch (error: any) {
    return handleError(error)
  }
};
