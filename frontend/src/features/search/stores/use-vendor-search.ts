import { create } from "zustand";
import {VendorList, VendorProfile} from "@/features/vendor";

interface IVendorSearchStore {
  query: string;
  vendors: VendorList;
  filteredVendors: VendorProfile[]
  setQuery: (query: string) => void;
  setVendors: (vendors: VendorList) => void;
}

export const useVendorSearchStore = create<IVendorSearchStore>((set, get) => ({
  query: "",
  vendors: null,
  filteredVendors: [],
  setVendors: (vendors: VendorList) => set({ vendors }),
  setQuery: (query: string) => set({ query }),
}));
