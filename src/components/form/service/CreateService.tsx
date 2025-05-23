import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { serviceSchema, ServiceSchema } from "@/lib/schemas/service";
import { createService } from "@/lib/action/service";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

const CreateService = () => {
  const [open, setOpen] = React.useState(false);
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [imageService, setImageService] = React.useState<File | null>(null);

  const form = useForm<ServiceSchema>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      title: "",
      image: "",
      description: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: ServiceSchema) {
    const formData = new FormData();
    if (imageService) {
      formData.append("image", imageService as File);
    }

    const result = await createService(values, formData);
    if (result.success.status) {
      toast.success(result.success.message);
      form.reset();
      setOpen(false);
    } else if (result.error) {
      toast.error(result.error.message);
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="text-white">Tambah Layanan</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Membuat Layanan</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="mt-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
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
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  setImageService(file || null);
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
                              placeholder="Deskripsi Layanan"
                              className="px-4 py-2 outline-primary border border-primary rounded"
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

export default CreateService;
