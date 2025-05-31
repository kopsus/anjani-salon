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
import { createProduct, updateProduct } from "@/lib/action/product";
import { productSchema, ProductSchema } from "@/lib/schemas/product";
import { baseIMGURL } from "@/lib/utils";
import { storeDialogProduct } from "@/types/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { Upload } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const DialogMutation = () => {
  const [dialog, setDialog] = useAtom(storeDialogProduct);
  const [imageProduct, setImageProduct] = React.useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);

  const closeDialog = () => {
    setDialog((prev) => ({ ...prev, show: false }));
    setPreviewUrl(null);
    setImageProduct(null);
    form.reset({
      title: "",
      price: 0,
      image: undefined,
      description: "",
    });
  };

  const form = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      price: 0,
      image: undefined,
      description: "",
    },
  });

  React.useEffect(() => {
    if (dialog.type === "UPDATE" && dialog.data) {
      const imageUrl = dialog.data.image;
      setPreviewUrl(imageUrl ? `${baseIMGURL}${imageUrl}` : null);
      form.reset({
        title: dialog.data.title,
        price: dialog.data.price,
        image: dialog.data.image,
        description: dialog.data.description,
      });
    }
  }, [dialog.type, dialog.data, form]);

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof productSchema>) {
    const formData = new FormData();
    if (imageProduct) {
      formData.append("image", imageProduct);
    }
    let result;
    if (dialog.type === "UPDATE" && dialog.data?.id) {
      result = await updateProduct(dialog.data.id, values, formData);
    } else {
      result = await createProduct(values, formData);
    }

    if (result.success.status) {
      toast.success(result.success.message);
      closeDialog();
    } else {
      toast.error(result.error.message);
    }
  }

  return (
    <DialogLayout
      show={dialog.type !== "DELETE" && dialog.show}
      onHide={closeDialog}
      title={`${dialog.type === "CREATE" ? "Tambah Produk" : "Edit Produk"}`}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 mx-auto"
        >
          <div className="space-y-4 text-left">
            <div className="w-40 h-40 mx-auto rounded-xl border bg-white shadow-1 overflow-hidden">
              {previewUrl ? (
                <Image
                  src={previewUrl ? previewUrl : `${baseIMGURL}${previewUrl}`}
                  alt="Preview"
                  width={160}
                  height={160}
                />
              ) : null}
            </div>

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
                        className="pl-12 w-full"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          setImageProduct(file || null);
                          if (file) {
                            setPreviewUrl(URL.createObjectURL(file));
                          }
                        }}
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

          <Button disabled={isSubmitting} className="w-full text-white">
            {isSubmitting ? "Menyimpan..." : "Simpan"}
          </Button>
        </form>
      </Form>
    </DialogLayout>
  );
};

export default DialogMutation;
