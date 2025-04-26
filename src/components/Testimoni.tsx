import { dataTestimoni } from "@/data/testimoni";
import { Star } from "lucide-react";
import React from "react";

const Testimoni = () => {
  return (
    <div className="max-w-[1840px] mx-auto flex flex-col gap-20 py-12 pl-4 lg:pt-20 lg:pl-8 lg:pb-[160px]">
      <div className="flex flex-col gap-3 lg:max-w-[80%] mx-auto text-center">
        <p className="title">Testimonials</p>
        <p className="title_section">Hear What Our Clients Are Saying</p>
      </div>
      <div
        className="relative h-[320px] lg:h-[360px] flex items-center gap-8 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {dataTestimoni.map((item, index) => {
          const stars = Array.from(
            { length: 5 },
            (_, index) => index < item.rating
          );
          return (
            <div
              key={index}
              className="rounded-[30px] min-w-[348px] w-[348px] p-8 flex flex-col h-full justify-between bg-slate-100"
            >
              <p className="lg:text-lg leading-[1.65em] text-[#464646]">
                {item.review}
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-1">
                  {stars.map((isFilled, index) => (
                    <Star
                      key={index}
                      className={`size-6 ${
                        isFilled
                          ? "fill-yellow-500 text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="lg:text-lg">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimoni;
