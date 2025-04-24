import CardProduct from "@/components/card/Product";
import HeroProduct from "@/components/hero/Product";
import Testimoni from "@/components/Testimoni";
import { dataProducts } from "@/data/products";
import React from "react";

const page = () => {
  return (
    <>
      <HeroProduct />
      <div className="Container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {dataProducts.map((item) => (
          <CardProduct key={item.id} item={item} />
        ))}
      </div>
      <Testimoni />
    </>
  );
};

export default page;
