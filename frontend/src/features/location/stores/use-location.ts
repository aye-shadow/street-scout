import { create } from "zustand";
import {Location} from "@/features/vendor";


interface ILocationStore {
  location: Location | null;
  setLocation: (location: Location) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string;
  setError: (error: string) => void;
}

export const useLocationStore = create<ILocationStore>((set, get) => ({
  location: null,
  loading: false,
  error: "",
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string) => set({ error }),
  setLocation: (location: Location) => set({ location }),
}));
