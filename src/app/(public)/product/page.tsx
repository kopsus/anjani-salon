import CardProduct from "@/components/card/Product";
import HeroProduct from "@/components/hero/Product";
import Testimoni from "@/components/Testimoni";
import prisma from "@/lib/prisma";
import React from "react";

const page = async () => {
  const products = await prisma.produk.findMany();
  return (
    <>
      <HeroProduct />
      <div className="Container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <CardProduct key={item.id} item={item} />
        ))}
      </div>
      <Testimoni />
    </>
  );
};

export default page;
