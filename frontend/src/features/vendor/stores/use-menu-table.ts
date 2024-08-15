import { create } from "zustand";

interface IMenuTableStore {
  page: number;
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
  setPage: (page: number) => void;
}

export const useMenuTableStore = create<IMenuTableStore>((set, get) => ({
  page: 0,
  rowsPerPage: 5,
  setRowsPerPage: (rowsPerPage: number) => set({ rowsPerPage, page: 0 }),
  setPage: (page: number) => set({ page: Math.max(page, 0) }),
}));
