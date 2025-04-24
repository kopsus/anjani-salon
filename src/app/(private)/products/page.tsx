import PageHeader from "@/components/dashboard/page-header";
import { ColumnsProduct } from "@/components/table/product/Columns";
import { DataTable } from "@/components/table/product/DataTable";
import { dataProducts } from "@/data/products";
import React from "react";

const page = () => {
  return (
    <>
      <PageHeader title="Products" />
      <DataTable title="Product" data={dataProducts} columns={ColumnsProduct} />
    </>
  );
};

export default page;
