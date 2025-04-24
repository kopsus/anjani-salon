import Image from "next/image";
import React from "react";

const About1 = () => {
  return (
    <div className="Container">
      <div className="flex flex-col gap-3 lg:max-w-[80%] items-center justify-center text-center">
        <p className="title">About Us</p>
        <p className="title_section">
          Lorem Ipsum is simply dummy text of the printing
        </p>
      </div>
      <div className="w-full lg:max-w-[1200px] flex flex-col gap-6 lg:gap-0 lg:flex-row lg:items-center mx-auto justify-between">
        <div className="order-2 lg:order-1 flex flex-col gap-4 w-full lg:gap-6 lg:max-w-[45%] text-[#464646]">
          <p className="text-[26px] lg:text-4xl leading-normal font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="lg:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="order-1 lg:order-2 w-full lg:max-w-[45%] h-[280px] lg:h-[414px] rounded-[20px] overflow-hidden">
          <Image
            src="/beauty-salon.png"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default About1;
