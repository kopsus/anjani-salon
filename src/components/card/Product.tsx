"use client";

import React from "react";
import { Card } from "../ui/card";
import { TypeProduct } from "@/types/product";
import { Button } from "../ui/button";
import Image from "next/image";
import { formatIDR } from "@/lib/format";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart } from "lucide-react";

const CardProduct = ({ item }: { item: TypeProduct }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleOrderClick = () => {
    // Menyusun pesan untuk WhatsApp
    const message = `Halo, saya ingin membeli produk: ${item.title}.`;

    // URL WhatsApp dengan pesan
    const whatsappUrl = `https://wa.me/6287724002299?text=${encodeURIComponent(
      message
    )}`;

    // Redirect ke WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  const handleAddToCart = () => {
    useCartStore.getState().addToCart({
      id: item.id,
      title: item.title,
      quantity: 1,
    });
  };

  return (
    <Card
      key={item.id}
      className="w-full h-max flex flex-col gap-4 p-4 border-slate-200 rounded-2xl"
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
      <div className="flex flex-col items-start gap-2">
        <p className="font-semibold">{item.title}</p>
        <p className={`${isExpanded ? "" : "line-clamp-3"} text-sm`}>
          {item.description}
        </p>

        {item.description?.length! > 100 && (
          <button
            onClick={handleToggleDescription}
            className="text-blue-500 text-sm font-medium cursor-pointer"
          >
            {isExpanded ? "Tampilkan lebih sedikit" : "Lihat selengkapnya"}
          </button>
        )}
        <p className="font-bold">{formatIDR(item.price)}</p>
      </div>

      <div className="grid grid-cols-4 gap-2 w-full">
        <Button
          onClick={handleOrderClick}
          className="text-white rounded-full cursor-pointer w-auto col-span-3"
        >
          Order
        </Button>
        <Button onClick={handleAddToCart} className="col-span-1 text-white">
          <ShoppingCart />
        </Button>
      </div>
    </Card>
  );
};

export default CardProduct;
