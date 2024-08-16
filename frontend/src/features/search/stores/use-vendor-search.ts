import { create } from "zustand";
import {VendorList, VendorProfile} from "@/features/vendor";

interface IVendorSearchStore {
  query: string;
  vendors: VendorList;
  filteredVendors: () => VendorProfile[]
  setQuery: (query: string) => void;
  setVendors: (vendors: VendorList) => void;
}

export const useVendorSearchStore = create<IVendorSearchStore>((set, get) => ({
  query: "",
  vendors: null,
  filteredVendors: () => {
    const { vendors, query } = get()
    if (!vendors?.vendors) return [] as VendorProfile[]
    return vendors.vendors.filter(v => (
      v.name.toLowerCase().includes(query.toLowerCase())
    ))
  },
  setVendors: (vendors: VendorList) => set({ vendors }),
  setQuery: (query: string) => set({ query }),
}));
