"use server"

import {MenuItemList, MenuItemRequest} from "@/features/vendor";
import {handleError} from "src/features/lib";
import axios from "@/features/lib/api/axios";

export async function addMenuItem(vendorId: number, payload: MenuItemRequest): Promise<MenuItemList> {
  try {
    console.log("⚡️addMenuItem", vendorId, payload);
    const { data } = await axios.post<MenuItemList>(
      `/api/vendors/${vendorId}/menu`,
      payload
    );
    return data;
  } catch (error: any) {
    return handleError(error)
  }
};
