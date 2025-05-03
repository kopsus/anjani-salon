import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TypeProduct } from "@/types/product";
import { Eye } from "lucide-react";
import Image from "next/image";
import React from "react";

interface IViewProduct {
  data: TypeProduct;
}

const ViewProduct = ({ data }: IViewProduct) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="w-full">
          <Button
            variant="ghost"
            size="sm"
            className="w-full flex flex-row items-center justify-start gap-2"
          >
            <Eye className="mr-2 h-4 w-4" />
            Lihat
          </Button>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Detail Produk</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="mt-4 grid grid-cols-1 gap-5">
              <Image
                src={data.image}
                alt={data.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-52 h-auto mx-auto overflow-hidden"
              />
              <p className="text-center text-xl font-bold">{data.title}</p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Tutup</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ViewProduct;
