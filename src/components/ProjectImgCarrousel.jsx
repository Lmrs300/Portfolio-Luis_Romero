import { SwiperSlide } from "swiper/react";
import CoverflowSwiper from "./CoverflowSwiper.jsx";

function ProjectImgCarrousel({ imgs, videos }) {
  return (
    <>
      <CoverflowSwiper width="w-[80%]">
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex flex-col items-center gap-4">
              <h1 className=" sm:text-2xl text-lg text-center">{img.title}</h1>
              <img
                className="rounded-xl sm:w-[70%] w-[90%] sm:h-[400px] h-[200px] mb-10"
                src={img.url}
                alt={`Imagen del proyecto ${img.title}`}
              />
            </div>
          </SwiperSlide>
        ))}
        {videos &&
          videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex flex-col items-center justify-center gap-4 cursor-default">
                <h1 className="lg:text-3xl text-2xl text-center">
                  {video.title}
                </h1>
                <video
                  className="rounded-xl sm:w-[70%] w-[90%] relative top-9"
                  src={video.url}
                  loop
                  controls
                >
                  Tu navegador no admite el elemento <code>video</code>.
                </video>
              </div>
            </SwiperSlide>
          ))}
      </CoverflowSwiper>
    </>
  );
}
export default ProjectImgCarrousel;
