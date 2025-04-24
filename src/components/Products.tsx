import React from "react";
import { dataProducts } from "@/data/products";
import CardProduct from "./card/Product";

const Products = () => {
  return (
    <div className="Container">
      <div className="flex flex-col gap-3 lg:max-w-[80%] items-center justify-center text-center">
        <p className="title">Our Products</p>
        <p className="title_section">
          Empowering Cyber Defenders with Advanced Solutions
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {dataProducts.slice(0, 4).map((item) => (
          <CardProduct key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
