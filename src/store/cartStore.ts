import { create } from "zustand";

type CartItem = {
  id: string;
  title: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalItems: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addToCart: (item) => {
    const existing = get().items.find((i) => i.id === item.id);
    if (existing) {
      set({
        items: get().items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({ items: [...get().items, { ...item, quantity: 1 }] });
    }
  },
  increaseQty: (id) => {
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  },
  decreaseQty: (id) => {
    set({
      items: get()
        .items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    });
  },
  removeFromCart: (id) => {
    set({ items: get().items.filter((item) => item.id !== id) });
  },
  clearCart: () => set({ items: [] }),
  totalItems: () =>
    get().items.reduce((total, item) => total + item.quantity, 0),
}));
