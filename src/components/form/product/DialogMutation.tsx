"use client";

import DialogLayout from "@/components/dialog/DialogLayout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useImageUpload } from "@/hooks/useImageUpload";
import { productSchema, ProductSchema } from "@/lib/schemas/product";
import supabase from "@/lib/supabase/init";
import { useProductStore } from "@/store/productStore";
import { storeDialogProduct } from "@/types/product";
import { deleteImageFromSupabase } from "@/utils/deleteImageFromSupabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { Upload } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const DialogMutation = () => {
  const [dialog, setDialog] = useAtom(storeDialogProduct);
  const [loading, setLoading] = React.useState(false);

  const { fetchProducts } = useProductStore();
  const {
    previewUrl,
    selectedFile,
    setPreviewUrl,
    handleFileSelect,
    uploadToSupabase,
    resetImage,
  } = useImageUpload();

  const form = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: { image: "", title: "", description: "", price: 0 },
  });

  React.useEffect(() => {
    if (dialog.type === "UPDATE" && dialog.data) {
      const imageUrl = dialog.data.image;
      setPreviewUrl(imageUrl ? imageUrl : null);
      form.reset({
        title: dialog.data.title,
        price: dialog.data.price,
        image: dialog.data.image,
        description: dialog.data.description,
      });
    }
  }, [dialog.type, dialog.data, form, setPreviewUrl]);

  const closeDialog = () => {
    setDialog((prev) => ({ ...prev, show: false }));
    resetImage();
    resetImage();
    form.reset({
      title: "",
      price: 0,
      image: undefined,
      description: "",
    });
  };

  const { handleSubmit, reset } = form;

  const onSubmit = async (data: ProductSchema) => {
    setLoading(true);

    try {
      let imageUrl = dialog.data?.image || ""; // default: image lama

      // kalau user upload gambar baru, upload ke supabase
      if (selectedFile) {
        if (dialog.type === "UPDATE" && dialog.data?.image) {
          await deleteImageFromSupabase(dialog.data.image);
        }

        const uploadedUrl = await uploadToSupabase("anjani");
        if (!uploadedUrl) return;
        imageUrl = uploadedUrl;
      }

      const payload = { ...data, image: imageUrl };

      if (dialog.type === "CREATE") {
        const { error } = await supabase.from("products").insert([payload]);
        if (error) {
          toast.error("Gagal menambahkan produk");
          return;
        }
        toast.success("Berhasil menambahkan produk");
      } else if (dialog.type === "UPDATE" && dialog.data?.id) {
        const { error } = await supabase
          .from("products")
          .update(payload)
          .eq("id", dialog.data.id);
        if (error) {
          toast.error("Gagal mengupdate produk");
          return;
        }
        toast.success("Produk berhasil diperbarui");
      }

      reset();
      resetImage();
      closeDialog();
      await fetchProducts();
    } catch (error) {
      console.error(error);
      toast.error("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DialogLayout
      show={dialog.type !== "DELETE" && dialog.show}
      onHide={closeDialog}
      title={dialog.type === "CREATE" ? "Tambah Produk" : "Edit Produk"}
    >
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 mx-auto"
        >
          <div className="space-y-4 text-left">
            {previewUrl && (
              <div className="w-40 h-40 mx-auto rounded-xl border bg-white shadow-1 overflow-hidden">
                <Image
                  src={previewUrl}
                  alt="Preview"
                  width={160}
                  height={160}
                />
              </div>
            )}

            <FormField
              control={form.control}
              name="image"
              render={() => (
                <FormItem>
                  <FormControl>
                    <div className="relative w-full mx-auto">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="pl-12 w-full"
                      />
                      <Upload className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="mx-auto">
                  <FormLabel className="text-gray-700">Nama Produk</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama Produk" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="mx-auto">
                  <FormLabel className="text-gray-700">Harga Produk</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Harga Produk"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="mx-auto">
                  <FormLabel className="text-gray-700">
                    Deskripsi Produk
                  </FormLabel>
                  <FormControl>
                    <textarea
                      className="px-4 py-2 outline-primary border border-primary rounded"
                      placeholder="Deskripsi Produk"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full text-white"
          >
            {loading ? "Loading..." : "Simpan"}
          </Button>
        </form>
      </Form>
    </DialogLayout>
  );
};

export default DialogMutation;
