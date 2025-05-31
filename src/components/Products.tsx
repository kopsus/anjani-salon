"use client";

import React, { useEffect, useState } from "react";
import CardProduct from "./card/Product";
import { TypeProduct } from "@/types/product";
import supabase from "@/lib/supabase/init";

const Products = () => {
  const [products, setProducts] = useState<TypeProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");

      if (error) console.log("error : ", error);
      else setProducts(data);
    };

    fetchProducts();
  }, []);

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
