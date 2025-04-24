import Image from "next/image";
import React from "react";
import Button from "../Button";
import salonIcon from "@/../public/salon-icon.png";

const HeroHome = () => {
  return (
    <div className="w-full max-w-[1400px] min-h-screen relative overflow-hidden lg:overflow-visible mx-auto">
      <div className="absolute top-[120px] lg:top-0 left-0 right-0 bottom-0">
        <Image
          src="https://framerusercontent.com/images/6nect3y8wTTkPP5aufmjYz7ki4.png?scale-down-to=2048"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="absolute left-0 right-0 overflow-visible flex flex-col items-start gap-20 min-h-min justify-center pr-8 px-4 top-[120px] lg:pl-[120px] lg:top-[176px]">
        <div className="flex flex-col items-start gap-8 min-h-min justify-center max-w-[560px] overflow-visible w-full relative z-10">
          <p className="text-[32px] lg:text-[56px] leading-[1.35em] tracking-[-.02em] font-semibold">
            <span className="text-primary">A trusted partner </span>
            in safeguarding against evolving cyber risks
          </p>
          <p>
            Protect your business with advanced cybersecurity solutions designed
            to detect, prevent, and respond to evolving threats.
          </p>
          <Button href="#">Learn More</Button>
        </div>
      </div>
      <div
        className="absolute overflow-hidden w-[307px] lg:w-[316px] h-[89px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[688px] bottom-10 lg:bottom-[195px] rounded-[20px] bg-[#ffffff80] flex items-center gap-4 z-10"
        style={{ backdropFilter: "blur(30px)" }}
      >
        <div className="aspect-square rounded-full w-[50px] h-[50px] left-4 overflow-hidden absolute -translate-y-1/2 top-1/2">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <Image
              src="https://framerusercontent.com/images/d3cmRAzSkaau82WW4YTqQisxY.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <div className="aspect-square rounded-full w-[50px] h-[50px] left-14 overflow-hidden absolute -translate-y-1/2 top-1/2">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <Image
              src="https://framerusercontent.com/images/sndYvdupZgMKjKVvtGts2uNsFv4.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <div className="aspect-square rounded-full w-[50px] h-[50px] left-24 overflow-hidden absolute -translate-y-1/2 top-1/2">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <Image
              src="https://framerusercontent.com/images/OwDmb6aUVXE9aDokjpUAIos2sc.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <div className="aspect-square rounded-full w-[50px] h-[50px] left-[138px] overflow-hidden absolute -translate-y-1/2 top-1/2">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <Image
              src="https://framerusercontent.com/images/IDzW3YXPB1SqbFwbV1npQ7MBc.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center h-full w-[35%] absolute bottom-0 right-0 p-0 overflow-hidden -translate-y-1/2 top-1/2">
          <p className="text-primary text-[28px] font-bold">140+</p>
          <p className="text-sm text-[#464646]">Pelangan Kami</p>
        </div>
      </div>
      <div
        className="absolute top-[422px] lg:top-[209px] right-[92px] lg:right-[148px] rounded-[20px] w-[65px] h-[65px] aspect-square bg-[#ffffff80] flex items-center justify-center z-10"
        style={{ backdropFilter: "blur(30px)" }}
      >
        <Image
          src={salonIcon}
          alt="salon icon"
          width={0}
          height={0}
          sizes="vw"
        />
      </div>
      <div className="contents">
        <div className="absolute top-[66%] lg:top-1/2 -translate-y-1/2 -right-[47px] lg:-right-[105px] w-[336px] lg:w-[436px] opacity-[0.745055]">
          <Image
            src="https://framerusercontent.com/images/mDLiVaqjca5Rwk6I27LDTWs.png"
            alt="Animated"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
