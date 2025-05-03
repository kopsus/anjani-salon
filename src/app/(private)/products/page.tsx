import PageHeader from "@/components/dashboard/page-header";
import { ColumnsProduct } from "@/components/table/product/Columns";
import { DataTable } from "@/components/table/product/DataTable";
import prisma from "@/lib/prisma";
import React from "react";

const page = async () => {
  const products = await prisma.produk.findMany();

  return (
    <>
      <PageHeader title="Products" />
      <DataTable title="Product" data={products} columns={ColumnsProduct} />
    </>
  );
};

export default page;
