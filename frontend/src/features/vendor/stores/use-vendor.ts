import { create } from "zustand";
import {Location, OperatingHours} from "@/features/vendor";

interface IVendorStore {
  name: string;
  description: string;
  location: Location;
  hours: OperatingHours
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setLocation: (location: Location) => void;
  setHours: (hours: OperatingHours) => void
}

export const useVendorStore = create<IVendorStore>((set, get) => ({
  name: null,
  description: null,
  location: null,
  hours: null,
  setName: (name: string) => set({ name }),
  setDescription: (description: string) => set({ description }),
  setLocation: (location: Location) => set({ location }),
  setHours: (hours: OperatingHours) => set({ hours }),
}));
