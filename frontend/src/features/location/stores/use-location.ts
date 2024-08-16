import { create } from "zustand";
import {Location} from "@/features/vendor";


interface ILocationStore {
  location: Location | null;
  loading: boolean;
  error: string;
  range: number;
  setLocation: (location: Location) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  setRange: (range: number) => void;
}

export const useLocationStore = create<ILocationStore>((set, get) => ({
  location: null,
  loading: false,
  error: "",
  range: 50,
  setRange: (range: number) => set({ range }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string) => set({ error }),
  setLocation: (location: Location) => set({ location }),
}));
