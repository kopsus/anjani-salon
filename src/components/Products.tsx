import React from "react";
import CardProduct from "./card/Product";
import prisma from "@/lib/prisma";

const Products = async () => {
  const products = await prisma.produk.findMany();

  return (
    <div className="Container">
      <div className="flex flex-col gap-3 lg:max-w-[80%] items-center justify-center text-center">
        <p className="title">Produk Kami</p>
        <p className="title_section">
          Rawat Diri Anda dengan Produk Kecantikan Terlaris Kami.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map((item) => (
          <CardProduct key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
