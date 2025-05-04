"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Edit, Upload } from "lucide-react";
import { TypeProduct } from "@/types/product";
import { useForm } from "react-hook-form";
import { productSchema, ProductSchema } from "@/lib/schemas/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProduct } from "@/lib/action/product";
import { toast } from "react-toastify";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IEditProduct {
  data: TypeProduct;
}

const EditProduct = ({ data }: IEditProduct) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(
    data.image ? `/uploads/${data.image}` : null
  );
  const [imageProduct, setImageProduct] = React.useState<File | null>(null);

  const form = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: data.title,
      image: data.image,
      price: data.price,
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: ProductSchema) {
    const formData = new FormData();
    if (imageProduct) {
      formData.append("image", imageProduct as File);
    }

    const result = await updateProduct(
      data.id,
      values,
      imageProduct ? formData : undefined
    );

    if (result.success.status) {
      form.reset();
      toast.success(result.success.message);
      setOpen(false);
      router.push("/products");
    } else if (result.error) {
      toast.error(result.error.message);
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex flex-row items-center justify-start gap-2"
        >
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Produk</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="mt-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-6"
                >
                  <div className="space-y-4 text-left">
                    <div className="w-40 h-40 mx-auto rounded-xl border bg-white shadow-1 overflow-hidden">
                      {previewUrl ? (
                        <Image
                          src={
                            previewUrl ? previewUrl : `/uploads/${previewUrl}`
                          }
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
                            <div className="relative w-full lg:w-2/3 mx-auto">
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
                        <FormItem className="lg:w-2/3 mx-auto">
                          <FormLabel className="text-gray-700">
                            Nama Produk
                          </FormLabel>
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
                        <FormItem className="lg:w-2/3 mx-auto">
                          <FormLabel className="text-gray-700">Harga</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Harga produk"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        form.reset();
                        setOpen(false);
                      }}
                    >
                      Batal
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                    >
                      {isSubmitting ? "Menyimpan..." : "Simpan"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditProduct;
