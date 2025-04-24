import React from "react";
import Button from "../Button";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import { TypeService } from "@/types/service";

const CardService = ({ item }: { item: TypeService }) => {
  return (
    <div
      key={item.id}
      className="h-min w-full rounded-[20px] p-8 flex flex-col items-start gap-6 bg-slate-100"
    >
      <div className="flex flex-col gap-6">
        <div className="break-words text-wrap">
          <p className="min-h-[50px] flex items-center md:text-lg lg:text-xl font-bold text-[#464646]">
            {item.title}
          </p>
        </div>
        <div className="min-h-[212px] w-full rounded-2xl overflow-hidden">
          <Image
            src={item.imageUrl}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {item.description.map((desc, index) => (
          <div key={index} className="flex items-center gap-4">
            <FaCircleCheck className="min-w-5 h-5 text-primary" />
            <p className="text-[#464646]">{desc}</p>
          </div>
        ))}
      </div>
      <Button href={item.buttonLink}>{item.buttonText}</Button>
    </div>
  );
};

export default CardService;
