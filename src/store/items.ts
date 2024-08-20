import { create } from "zustand";
import { ItemType } from "./cart";

const pizzas = [
  { id: 1, name: "Margherita", price: 25, quantity: 0 },
  { id: 2, name: "Pepperoni", price: 30, quantity: 0 },
  { id: 3, name: "Quatro Queijos", price: 35, quantity: 0 },
  { id: 4, name: "Calabresa", price: 28.0, quantity: 0 },
  { id: 5, name: "Frango com Catupiry", price: 32, quantity: 0 },
];

type stateType = {
  items: ItemType[];
  setItems: (item: ItemType[]) => void;
};

export const useItemsStore = create<stateType>((set) => ({
  items: pizzas,
  setItems: (item) => set(() => ({ items: item })),
}));
