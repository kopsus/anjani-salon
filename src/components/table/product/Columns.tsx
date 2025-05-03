"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TypeProduct } from "@/types/product";
import { formatIDR } from "@/lib/format";
import Image from "next/image";
import { MoreHorizontal, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ViewProduct from "@/components/form/product/ViewProduct";
import EditProduct from "@/components/form/product/EditProduct";
import DeleteProduct from "@/components/form/product/DeleteProduct";

export const ColumnsProduct: ColumnDef<TypeProduct>[] = [
  {
    accessorKey: "title",
    header: "Nama",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const image = `/uploads/${row.getValue("image")}`;
      return (
        <div className="w-20 h-20 rounded overflow-hidden bg-white">
          <Image
            src={image}
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
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full flex justify-end">
          <MoreHorizontal className="h-4 w-4 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32 bg-white">
          <DropdownMenuLabel>Aksi</DropdownMenuLabel>
          <ViewProduct data={row.original} />
          <EditProduct data={row.original} />
          <DeleteProduct id={row.original.id} />
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
