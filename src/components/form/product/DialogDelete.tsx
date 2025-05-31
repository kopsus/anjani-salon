"use client";

import DialogLayout from "@/components/dialog/DialogLayout";
import { Button } from "@/components/ui/button";
import supabase from "@/lib/supabase/init";
import { useProductStore } from "@/store/productStore";
import { storeDialogProduct } from "@/types/product";
import { deleteImageFromSupabase } from "@/utils/deleteImageFromSupabase";
import { useAtom } from "jotai";
import React from "react";
import { toast } from "react-toastify";

const DialogDelete = () => {
  const [dialog, setDialog] = useAtom(storeDialogProduct);
  const closeDialog = () => {
    setDialog((prev) => ({
      ...prev,
      show: false,
    }));
  };

  const { fetchProducts } = useProductStore();

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", dialog.data?.id);
    if (error) toast.error("Gagal menghapus produk");
    else {
      await deleteImageFromSupabase(dialog.data?.image!);
      await fetchProducts();
      toast.success("Berhasil menghapus produk");
      closeDialog();
    }
  };

  return (
    <DialogLayout
      show={dialog.type === "DELETE" && dialog.show}
      onHide={closeDialog}
      titleDelete="Yakin ingin menghapus Product ini?"
    >
      <div className="flex items-center justify-center gap-5">
        <Button variant={"outline"} onClick={closeDialog}>
          Cancel
        </Button>
        <Button variant={"destructive"} onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </DialogLayout>
  );
};

export default DialogDelete;
