import React from "react";
import Button from "../Button";
import Image from "next/image";
import { TypeService } from "@/types/service";

const CardService = ({ item }: { item: TypeService }) => {
  return (
    <div
      key={item.id}
      className="h-min w-full rounded-[20px] p-8 flex flex-col items-start gap-6 bg-slate-100"
    >
      <div className="flex flex-col gap-6">
        <div className="break-words text-wrap">
          <p className="flex items-center text-lg lg:text-xl font-bold text-[#464646]">
            {item.title}
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={item.imageUrl}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="h-[212px] w-96"
          />
        </div>
      </div>
      <Button href={`https://wa.me/+6287724002299`}>Booking Now</Button>
    </div>
  );
};

export default CardService;
