import React from "react";
import Button from "../Button";
import Image from "next/image";
import { TypeService } from "@/types/service";
import { baseURL } from "@/lib/utils";

const CardService = ({ item }: { item: TypeService }) => {
  const message = `Halo, saya ingin booking untuk layanan: ${item.title}.`;

  return (
    <div
      key={item.id}
      className="h-full w-full rounded-[20px] p-8 flex flex-col items-start gap-6 bg-slate-100"
    >
      <div className="flex flex-col gap-6">
        <div className="break-words text-wrap">
          <p className="flex items-center text-lg lg:text-xl font-bold text-[#464646]">
            {item.title}
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden h-[212px] w-full">
          <Image
            src={`${baseURL}${item.image}`}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <p className="">{item.description}</p>
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
