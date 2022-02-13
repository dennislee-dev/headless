import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Virtual,
  Autoplay,
} from "swiper";
import "swiper/swiper-bundle.css";
import { useState } from "react";

function Reviewitem({nom, note, avis, lien}) {

  SwiperCore.use([Navigation, Thumbs, Pagination, Virtual, Autoplay]);

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <SwiperSlide className="">
        <div className="text-black  m-auto  space-y-2 w-[280px]">
          <div className="m-auto w-full p-2 rounded">
            <img
              className=" w-[80%] m-auto  rounded flex items-center"
              alt=""
              width="300px"
              height="330px"
              src={lien}
            />
          </div>
          <div className="bg-white rounded ">
            <div className="flex justify-between p-2">
              <h1 className="font-bold">{nom}</h1>
              <div className="flex space-x-[px] items-center   justify-center">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#FFAD64]"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#FFAD64]"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#FFAD64]"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#FFAD64]"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faStarHalfAlt}
                  className="text-[#FFAD64] "
                ></FontAwesomeIcon>
                <h1 className="pl-2 font-semibold text-neutral-800">{note}</h1>
              </div>
            </div>
            <p className=" px-2 pb-2">
              {avis}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </>
  );
}
export default Reviewitem;
