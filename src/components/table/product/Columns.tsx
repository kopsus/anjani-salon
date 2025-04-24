"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TypeProduct } from "@/types/product";
import { formatIDR } from "@/lib/format";
import Image from "next/image";
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ColumnsProduct: ColumnDef<TypeProduct>[] = [
  {
    accessorKey: "title",
    header: "Nama",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      return (
        <div className="w-20 h-20 rounded overflow-hidden bg-white">
          <Image
            src={row.getValue("image")}
            alt="image"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      return <p>{formatIDR(row.getValue("price"))}</p>;
    },
  },
  {
    enablePinning: true,
    accessorKey: "Aksi",
    header: "Aksi",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full flex justify-end">
          <MoreHorizontal className="h-4 w-4 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32 bg-white">
          <DropdownMenuLabel>Aksi</DropdownMenuLabel>
          <Button
            variant="ghost"
            size="sm"
            className="w-full flex flex-row items-center justify-start gap-2"
          >
            <Eye className="mr-2 h-4 w-4" />
            Lihat
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full flex flex-row items-center justify-start gap-2"
          >
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full flex flex-row items-center justify-start gap-2"
          >
            <Trash className="mr-2 h-4 w-4" />
            Hapus
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
