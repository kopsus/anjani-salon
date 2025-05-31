import { create } from "zustand";
import supabase from "@/lib/supabase/init";
import { TypeProduct } from "@/types/product";

type ProductState = {
  products: TypeProduct[];
  fetchProducts: () => Promise<void>;
};

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  fetchProducts: async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true });
    if (!error && data) {
      set({ products: data });
    } else {
      console.error("Gagal fetch products:", error);
    }
  },
}));
