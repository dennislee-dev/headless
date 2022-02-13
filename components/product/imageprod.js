import SwiperCore, {
  Navigation,
  Thumbs,
  Pagination,
  Virtual,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import "swiper/swiper-bundle.css";

function Imageprod({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [];

  product.images.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <img
          src={image.node.originalSrc}
          alt={image.node.altText}
          layout="fill"
        />
      </SwiperSlide>
    );
  });

  const images2 = [];

  product.images.edges.map((image, i) => {
    images2.push(
      <SwiperSlide key={`slide-${i}`} className=" cursor-pointer ml-2">
        <img
          className="lg:w-[75px] w-[55px] border-2 border-general m-2 p-1 bg-white "
          src={image.node.originalSrc}
          alt={image.node.altText}
          layout="fill"
        />
      </SwiperSlide>
    );
  });

  SwiperCore.use([Navigation, Thumbs, Pagination, Virtual, Autoplay]);

  return (
    <>
     <div className="bg-[#EFF6F5] w-full text-center py-5 lg:py-10">
          <div className="lg:w-[500px]  h-auto m-auto">
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        navigation
        pagination={{ clickable: true }}
        className="h-[300px]  w-[300px]  lg:h-[500px] lg:w-[500px]  "
        loop="true"
        thumbs={{ swiper: thumbsSwiper }}
      >
        {images}
      </Swiper>

      <Swiper
        className=" lg:w-[90%] w-[70%] m-auto"
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
      >
        {images2}
      </Swiper>
      </div>
        </div>
    </>
  );
}
export default Imageprod;
