import {MenuItemDetails} from "@/features/vendor";

export function extractKeys<T extends {}>(obj: T): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>;
}

export const menuItemKeys = extractKeys<MenuItemDetails>({
  id: null,
  name: null,
  description: null,
  price: null
});
