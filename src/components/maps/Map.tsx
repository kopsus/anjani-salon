"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

// Import peta secara dinamis tanpa SSR
const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

const Maps = () => {
  return (
    <Link
      href={
        "https://www.google.com/maps/place/Dr.Aviv+Aziz+T.+Mmr/@-7.0657704,109.3798344,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6fe62bc0cb04a1:0x2c9b83330ca7da9f!8m2!3d-7.0657704!4d109.3824093!16s%2Fg%2F11y3knw3mb?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
      }
      target="_blank"
      className="h-full w-full rounded-xl shadow-lg bg-white overflow-hidden z-10"
    >
      <LeafletMap />
    </Link>
  );
};

export default Maps;
