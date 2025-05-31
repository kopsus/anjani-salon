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
import { TypeService } from "@/types/service";
import { useForm } from "react-hook-form";
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
import { useImageUpload } from "@/hooks/useImageUpload";
import supabase from "@/lib/supabase/init";
import { useServiceStore } from "@/store/serviceStore";
import { deleteImageFromSupabase } from "@/utils/deleteImageFromSupabase";

interface IEditService {
  data: TypeService;
}

const EditService = ({ data }: IEditService) => {
  const {
    previewUrl,
    selectedFile, // ← tambahkan ini
    setPreviewUrl,
    handleFileSelect,
    uploadToSupabase,
    resetImage,
  } = useImageUpload();
  const { fetchServices } = useServiceStore();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const form = useForm({
    defaultValues: {
      image: data.image || "",
      title: data.title || "",
      description: data.description || "",
    },
  });

  const { handleSubmit, reset } = form;

  React.useEffect(() => {
    if (open) {
      reset({
        image: data.image || "",
        title: data.title || "",
        description: data.description || "",
      });

      if (data.image) {
        setPreviewUrl(data.image);
      }
    }
  }, [data.description, data.image, data.title, open, reset, setPreviewUrl]);

  const onSubmit = async (formData: any) => {
    setLoading(true);
    let imageUrl = data.image;

    try {
      if (selectedFile) {
        if (data.image) {
          await deleteImageFromSupabase(data.image);
        }

        const uploadedUrl = await uploadToSupabase("anjani");
        if (!uploadedUrl) return;
        imageUrl = uploadedUrl;
      }

      const payload = {
        ...formData,
        image: imageUrl,
      };

      const { error } = await supabase
        .from("services")
        .update(payload)
        .eq("id", data.id);

      if (error) {
        toast.error("Gagal mengupdate layanan");
      } else {
        await fetchServices();
        reset();
        resetImage();
        toast.success("Berhasil mengupdate layanan");
        setOpen(false); // Tutup dialog hanya jika berhasil
      }
    } catch (err) {
      console.error(err);
      toast.error("Terjadi kesalahan saat update");
    } finally {
      setLoading(false);
    }
  };

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
          <AlertDialogTitle>Edit Layanan</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="mt-4">
              <Form {...form}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-6 lg:max-w-5/6 mx-auto"
                >
                  <div className="space-y-4 text-left">
                    <div className="w-40 h-40 mx-auto rounded-xl border bg-white shadow-1 overflow-hidden">
                      {previewUrl ? (
                        <Image
                          src={previewUrl ? previewUrl : `${previewUrl}`}
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
                                onChange={handleFileSelect}
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
                          <FormLabel className="text-gray-700">
                            Nama Layanan
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Nama Layanan" {...field} />
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
                            Deskripsi Layanan
                          </FormLabel>
                          <FormControl>
                            <textarea
                              className="px-4 py-2 outline-primary border border-primary rounded"
                              placeholder="Deskripsi Layanan"
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
                      onClick={handleSubmit(onSubmit)}
                      disabled={loading}
                      className="text-white"
                    >
                      {loading ? "Loading..." : "Simpan"}
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

export default EditService;
