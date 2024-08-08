import type {MenuItemDetails} from "@/features/vendor";
import {Menu} from "@mui/material";

export const stringify = (value: any) => {
  if (typeof value === 'string') {
    return value;
  } else if (Array.isArray(value)) {
    return value.length;
  } else if (typeof value === 'object' && value !== null) {
    return JSON.stringify(value);
  } else {
    return String(value);
  }
}

