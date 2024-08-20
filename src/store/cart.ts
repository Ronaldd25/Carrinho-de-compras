import { create } from "zustand";

export type ItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type stateType = {
  cartItems: ItemType[];
  setCartItems: (item: ItemType[]) => void;
};

export const useCartStore = create<stateType>((set) => ({
  cartItems: [],
  setCartItems: (item) => set(() => ({ cartItems: item })),
}));
