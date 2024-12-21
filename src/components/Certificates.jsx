import { SwiperSlide } from "swiper/react";

import CoverflowSwiper from "./CoverflowSwiper";

function Certificates() {
  const featuredCerts = [
    {
      title: "Back End Development and Apis",
      image: "/certs/Certificacion - Back-end development and apis.webp",
    },
    {
      title: "Universidad Angular - Cero a Experto - Angular 18",
      image: "/certs/Certificado curso Angular.webp",
    },
    {
      title: "Introducción al desarrollo web: HTML y CSS",
      image: "/certs/Introducción al desarrollo web.webp",
    },
    {
      title: "Python Essentials 1",
      image: "/certs/Python Essentials 1 - Certificado.webp",
    },
    {
      title: "Python Essentials 2",
      image: "/certs/Python Essentials 2 - Certificado.webp",
    },
    {
      title: "Hacksplaining Security Training",
      image: "/certs/Hacksplaining Completion Certificate.webp",
    },
  ];

  return (
    <>
      <CoverflowSwiper>
        {featuredCerts.map((cert, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex flex-col items-center gap-4">
              <h1 className="text-3xl text-center">{cert.title}</h1>
              <div className="w-full flex justify-center sm:h-[400px] h-[300px]">
                <img
                  className="cuadro w-[80%] sm:h-[400px] h-[300px] absolute z-10"
                  src="/certs/Cuadro.webp"
                />
                <img
                  className="w-[68%] sm:h-[317px] h-[238px] relative sm:top-[40px] top-[30px]"
                  src={cert.image}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </CoverflowSwiper>

      <div className="w-full flex justify-center mt-6">
        <a
          href="/certificados"
          className="text-white transition-all bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver todos {">"}
        </a>
      </div>
    </>
  );
}

export default Certificates;
