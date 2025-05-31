import { create } from "zustand";
import supabase from "@/lib/supabase/init";
import { TypeService } from "@/types/service";

type ServiceState = {
  services: TypeService[];
  fetchServices: () => Promise<void>;
};

export const useServiceStore = create<ServiceState>((set) => ({
  services: [],
  fetchServices: async () => {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("id", { ascending: true });
    if (!error && data) {
      set({ services: data });
    } else {
      console.error("Gagal fetch services:", error);
    }
  },
}));
