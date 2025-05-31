"use client";

import React from "react";
import Button from "../Button";
import Image from "next/image";
import { TypeService } from "@/types/service";
import { baseIMGURL } from "@/lib/utils";

const CardService = ({ item }: { item: TypeService }) => {
  const message = `Halo, saya ingin booking untuk layanan: ${item.title}.`;
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      key={item.id}
      className="h-max w-full rounded-[20px] p-8 flex flex-col items-start gap-6 bg-slate-100"
    >
      <div className="flex flex-col gap-6 w-full">
        <p className="flex items-center text-lg h-8 lg:text-xl font-bold text-[#464646]">
          {item.title}
        </p>
        <div className="rounded-2xl overflow-hidden h-[212px] w-full">
          <Image src={item.image} alt="" width={0} height={0} sizes="100vw" />
        </div>
        <div>
          <p className={`${isExpanded ? "" : "line-clamp-3"}`}>
            {item.description}
          </p>

          {item.description?.length! > 100 && (
            <button
              onClick={handleToggleDescription}
              className="text-blue-500 font-medium cursor-pointer"
            >
              {isExpanded ? "Tampilkan lebih sedikit" : "Lihat selengkapnya"}
            </button>
          )}
        </div>
      </div>
      <Button
        href={`https://wa.me/+6287724002299?text=${encodeURIComponent(
          message
        )}`}
      >
        Booking Now
      </Button>
    </div>
  );
};

export default CardService;
