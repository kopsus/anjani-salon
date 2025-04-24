import Image from "next/image";
import React from "react";

const HeroAbout = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="w-full lg:min-h-screen relative flex flex-col items-center px-4 pt-[120px] lg:pt-[190px] lg:px-[120px]">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <Image
            src="https://framerusercontent.com/images/6nect3y8wTTkPP5aufmjYz7ki4.png?scale-down-to=2048"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="w-full relative flex flex-col gap-12 max-w-[1200px] mx-auto">
          <div className="title_section text-center">
            <p>Lorem Ipsum is simply</p>
            <p>text of the printing and typesetting</p>
          </div>
          <div className="w-full h-[211px] lg:h-[409px] rounded-[20px] overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/1z65g0BqsB0ScWBEmk8STemZ4.png"
              alt=""
              style={{ objectPosition: "49.5% 24%" }}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
