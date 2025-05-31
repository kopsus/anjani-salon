"use client";

import React, { useEffect } from "react";
import CardProduct from "./card/Product";
import { TypeProduct } from "@/types/product";
import { useProductStore } from "@/store/productStore";

const Products = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="Container">
      <div className="flex flex-col gap-3 lg:max-w-[80%] items-center justify-center text-center">
        <p className="title">Produk Kami</p>
        <p className="title_section">
          Rawat Diri Anda dengan Produk Kecantikan Terlaris Kami.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map((item: TypeProduct) => (
          <CardProduct key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
