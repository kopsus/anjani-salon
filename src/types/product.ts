import { atom } from "jotai";

export type IDialog = {
  show: boolean;
  type: "CREATE" | "UPDATE" | "DELETE";
  data?: TypeProduct | null;
};

export const storeDialogProduct = atom<IDialog>({
  show: false,
  type: "CREATE",
  data: null,
});

export type TypeProduct = {
  id: string;
  image: string;
  title: string;
  price: number;
  description?: string;
};
