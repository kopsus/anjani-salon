"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TypeProduct } from "@/types/product";
import { formatIDR } from "@/lib/format";
import Image from "next/image";
import { TableAction } from "./TableActions";

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
    cell: ({ row }: { row: { original: TypeProduct } }) => {
      const item = row.original;
      return <TableAction item={item} />;
    },
  },
];
