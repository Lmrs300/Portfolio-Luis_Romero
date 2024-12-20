import { Swiper } from "swiper/react";

import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./swiper-bullets.css";

function CoverflowSwiper(props) {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCoverflow]}
      effect="coverflow"
      spaceBetween={50}
      allowTouchMove={true}
      centeredSlides={true}
      speed={500}
      preventClicks={true}
      slidesPerView={"auto"}
      loop={true}
      coverflowEffect={{
        rotate: 20,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: false,
      }}
      navigation
      pagination={{ clickable: true }}
      className={"cursor-grab select-none " + props.width}
    >
      {props.children}
    </Swiper>
  );
}

export default CoverflowSwiper;
