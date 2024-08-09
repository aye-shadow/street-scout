export interface VendorList {
  page: number;
  totalPages: number;
  pageSize: number;
  vendors: VendorProfile[];
}

export interface VendorProfile {
  id: number;
  name: string;
  email: string;
  description: string;
  photos: string[];
  location?: Location;
  operatingHours?: OperatingHours;
  menu: MenuItemDetails[];
  active: boolean;
}

export interface MenuItemDetails {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface OperatingHours {
  open: Date;
  close: Date;
}

export interface MenuItemRequest {
  name: string;
  description: string;
  price: number;
}

export interface MenuItemList {}
