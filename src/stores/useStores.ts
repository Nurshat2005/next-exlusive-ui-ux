import { create } from 'zustand';

export const useStores = create<IStoresType>((set) => ({
  active: false,
  toggleActive: () => set((state) => ({ active: !state.active })),
}));
