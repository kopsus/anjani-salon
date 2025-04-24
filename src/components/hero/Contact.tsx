import Image from "next/image";
import React from "react";

const HeroContact = () => {
  return (
    <div className="w-full relative flex flex-col pt-[120px] lg:pt-[190px]">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          src="https://framerusercontent.com/images/6nect3y8wTTkPP5aufmjYz7ki4.png?scale-down-to=2048"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <p
        data-aos="fade-up"
        className="relative text-[32px] lg:text-[56px] font-bold text-[#232323] text-center"
      >
        Contact
      </p>
    </div>
  );
};

export default HeroContact;
