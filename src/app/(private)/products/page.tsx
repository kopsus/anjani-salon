import PageHeader from "@/components/dashboard/page-header";
import DialogDelete from "@/components/form/product/DialogDelete";
import DialogMutation from "@/components/form/product/DialogMutation";
import { ColumnsProduct } from "@/components/table/product/Columns";
import { DataTable } from "@/components/table/product/DataTable";
import prisma from "@/lib/prisma";
import React from "react";
export const dynamic = "force-dynamic";

const page = async () => {
  const products = await prisma.produk.findMany();

  return (
    <>
      <PageHeader title="Products" />
      <DataTable title="Product" data={products} columns={ColumnsProduct} />
      <DialogMutation />
      <DialogDelete />
    </>
  );
};

export default page;
