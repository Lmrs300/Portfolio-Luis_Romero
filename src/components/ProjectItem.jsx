import { SwiperSlide } from "swiper/react";
import CoverflowSwiper from "./CoverflowSwiper";

function ProjectHeader({ title, imgs, videos, urlVolver, children }) {
  return (
    <>
      <main className="lg:py-22 py-24 scroll-m-20 w-full mx-auto container flex justify-center items-center flex-col relative">
        <a
          href={urlVolver}
          className="absolute top-16 md:left-0 left-3 text-lg hover:text-blue-500 transition"
        >
          {"<"} Volver
        </a>
        <h1 className="lg:text-4xl text-3xl text-center max-w-[90%] mb-8">
          {title}
        </h1>

        <CoverflowSwiper width="w-[80%]">
          {imgs.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex flex-col items-center gap-4">
                <h1 className="lg:text-3xl text-2xl text-center">
                  {img.title}
                </h1>
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

        <div className="w-[70%] mt-6">{children}</div>
      </main>
    </>
  );
}

export default ProjectHeader;
