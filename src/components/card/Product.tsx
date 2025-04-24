import React from "react";
import { Card } from "../ui/card";
import { TypeProduct } from "@/types/product";
import { Button } from "../ui/button";
import Image from "next/image";

const CardProduct = ({ item }: { item: TypeProduct }) => {
  return (
    <Card
      key={item.id}
      className="w-full flex flex-col gap-4 p-4 border-slate-200 rounded-2xl"
    >
      <div className="bg-slate-200 w-full h-48 rounded-2xl overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">{item.title}</p>
        <p className="font-bold">Rp. {item.price}</p>
      </div>
      <Button className="text-white rounded-full cursor-pointer">Order</Button>
    </Card>
  );
};

export default CardProduct;
