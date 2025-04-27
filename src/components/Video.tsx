"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { dataVideo } from "@/data/Video";

const Video = () => {
  return (
    <div className="bg-white backdrop-blur-xl py-12 pl-4 lg:pt-20 lg:pl-8 lg:pb-[160px]">
      <div
        className="relative flex items-center gap-3 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {dataVideo.map((item, index) => {
          const fileId = item.video.split("/")[5];
          return (
            <div
              key={index}
              className="h-64 min-w-40 aspect-square lg:h-96 lg:min-w-64 rounded-xl overflow-hidden bg-slate-100"
            >
              <iframe
                src={`https://drive.google.com/file/d/${fileId}/preview`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Video;
