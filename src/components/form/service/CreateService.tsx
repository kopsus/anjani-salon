import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import supabase from "@/lib/supabase/init";
import { useForm, FormProvider } from "react-hook-form";
import { useImageUpload } from "@/hooks/useImageUpload";
import { useServiceStore } from "@/store/serviceStore";

const CreateService = () => {
  const { fetchServices } = useServiceStore();
  const { previewUrl, handleFileSelect, uploadToSupabase, resetImage } =
    useImageUpload();
  const [open, setOpen] = React.useState(false);

  const form = useForm({
    defaultValues: { image: "", title: "", description: "" },
  });
  const { handleSubmit, reset } = form;

  const onSubmit = async (data: any) => {
    const imageUrl = await uploadToSupabase("anjani");
    if (!imageUrl) return;

    const payload = { ...data, image: imageUrl };

    const { error } = await supabase.from("services").insert([payload]);
    if (error) {
      toast.error("Gagal menambahkan layanan");
    } else {
      reset();
      resetImage();
      setOpen(false);
      toast.success("Berhasil menambahkan service");
      await fetchServices();
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="text-white">Tambah Layanan</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="h-[95vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>Membuat Layanan</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <FormProvider {...form}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-between h-full gap-6 w-full mx-auto"
              >
                <div className="space-y-4 text-left">
                  <FormItem className="mx-auto">
                    {previewUrl && (
                      <Image
                        src={previewUrl}
                        alt="Preview"
                        className="mt-2 w-48 h-48 object-cover rounded mx-auto"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    )}
                    <FormLabel className="text-gray-700">
                      Pilih Gambar
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        name="image"
                      />
                    </FormControl>
                  </FormItem>

                  <FormField
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
                    name="description"
                    render={({ field }) => (
                      <FormItem className="mx-auto">
                        <FormLabel className="text-gray-700">
                          Deskripsi Layanan
                        </FormLabel>
                        <FormControl>
                          <textarea
                            placeholder="Deskripsi Layanan"
                            className="px-4 py-2 outline-primary border border-primary rounded h-32"
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
                      setOpen(false);
                    }}
                  >
                    Batal
                  </Button>
                  <Button type="submit" className="text-white">
                    Simpan
                  </Button>
                </div>
              </form>
            </FormProvider>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateService;
