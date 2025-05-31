import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { toast } from "react-toastify";
import supabase from "@/lib/supabase/init";
import { useServiceStore } from "@/store/serviceStore";
import { deleteImageFromSupabase } from "@/utils/deleteImageFromSupabase";

interface IDeleteService {
  image: string;
  id: string;
}

const DeleteService = ({ id, image }: IDeleteService) => {
  const { fetchServices } = useServiceStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("services").delete().eq("id", id);
    if (error) toast.error("Gagal menghapus layanan");
    else {
      await deleteImageFromSupabase(image);
      await fetchServices();
      toast.success("Berhasil menghapus layanan");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="w-full">
          <Button
            variant="ghost"
            size="sm"
            className="w-full flex flex-row items-center justify-start gap-2"
          >
            <Trash className="mr-2 h-4 w-4" />
            Hapus
          </Button>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
            <AlertDialogDescription className="mb-1">
              Tindakan ini tidak dapat dibatalkan. Ini akan menghapus data
              layanan secara permanen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-2">
            <AlertDialogCancel
              type="button"
              className="bg-slate-100 text-black hover:bg-slate-200"
            >
              Batal
            </AlertDialogCancel>
            <AlertDialogAction
              type="submit"
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Lanjutkan
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteService;
