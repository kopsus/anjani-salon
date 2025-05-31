"use client";

import PageHeader from "@/components/dashboard/page-header";
import DialogDelete from "@/components/form/product/DialogDelete";
import DialogMutation from "@/components/form/product/DialogMutation";
import { ColumnsProduct } from "@/components/table/product/Columns";
import { DataTable } from "@/components/table/product/DataTable";
import { useProductStore } from "@/store/productStore";
import React, { useEffect } from "react";

const ProductPage = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <PageHeader title="Products" />
      <DataTable title="Product" data={products} columns={ColumnsProduct} />
      <DialogMutation />
      <DialogDelete />
    </>
  );
};

export default ProductPage;
