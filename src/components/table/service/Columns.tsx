"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TypeService } from "@/types/service";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import EditService from "@/components/form/service/EditService";
import DeleteService from "@/components/form/service/DeleteService";
import { baseURL } from "@/lib/utils";

export const ColumnsService: ColumnDef<TypeService>[] = [
  {
    accessorKey: "title",
    header: "Nama",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const image = `${baseURL}${row.getValue("image")}`;
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
    accessorKey: "description",
    header: "Deskripsi",
    cell: ({ row }) => {
      return (
        <p className="text-wrap line-clamp-3">{row.getValue("description")}</p>
      );
    },
  },
  {
    enablePinning: true,
    accessorKey: "Aksi",
    header: "Aksi",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full flex justify-end outline-none">
          <MoreHorizontal className="h-4 w-4 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32 bg-white">
          <DropdownMenuLabel>Aksi</DropdownMenuLabel>
          <EditService data={row.original} />
          <DeleteService id={row.original.id} />
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
