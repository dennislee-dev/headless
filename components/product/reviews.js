import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { Swiper, SwiperSlide } from "swiper/react";
import {
   review_name1,
 review_name2,
 review_name3,
 review_name4,
 review_name5,
 review_name6,
 review_name7,
 review_name8,
 review_name9,
 review_name10,
 review_name11,
 review_name12,
 review_name13,
 review_name14,
 review_name15,
 review_name16,
 review_name17,
 review_name18,
 review_name19,
 review_name20,
 review_note1,
 review_note2,
 review_note3,
 review_note4,
 review_note5,
 review_note6,
 review_note7,
 review_note8,
 review_note9,
 review_note10,
 review_note11,
 review_note12,
 review_note13,
 review_note14,
 review_note15,
 review_note16,
 review_note17,
 review_note18,
 review_note19,
 review_note20,
 review_avis1,
 review_avis2,
 review_avis3,
 review_avis4,
 review_avis5,
 review_avis6,
 review_avis7,
 review_avis8,
 review_avis9,
 review_avis10,
 review_avis11,
 review_avis12,
 review_avis13,
 review_avis14,
 review_avis15,
 review_avis16,
 review_avis17,
 review_avis18,
 review_avis19,
 review_avis20,
 review_lienphoto1,
 review_lienphoto2,
 review_lienphoto3,
 review_lienphoto4,
 review_lienphoto5,
 review_lienphoto6,
 review_lienphoto7,
 review_lienphoto8,
 review_lienphoto9,
 review_lienphoto10,
 review_lienphoto11,
 review_lienphoto12,
 review_lienphoto13,
 review_lienphoto14,
 review_lienphoto15,
 review_lienphoto16,
 review_lienphoto17,
 review_lienphoto18,
 review_lienphoto19,
 review_lienphoto20,
} from '../../lib/config'

function Reviews() {
  return (
    <>
    <div className="dividers-svg dividers-svg-reviews-branding dividers-top ">
        <svg
          fill="#19806D"
          className="hidden lg:block"
          xmlns="http://www.w3.org/2000/svg"
          id="Calque_1"
          data-name="Calque 1"
          viewBox="0 0 350 16.5"
        >
          <path
            d="M350,23V6.5s-26.32,6.88-45,6.79c-21.26-.09-27.87-5-51-5.82-23.73-.82-22.83,4.15-50,4.85-30.74.8-32.87-5.54-64-4.85-26.95.6-25.13,5.34-50,4.85-23.09-.45-30.91-4.66-53-3.88C20.66,9,0,12.32,0,14.26V23H350Z"
            transform="translate(0 -6.5)"
          ></path>
        </svg>
        <svg
          fill="#19806D"
          className="lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
          id="Calque_1"
          data-name="Calque 1"
          viewBox="0 0 94 14"
        >
          <path d="M94,14V0S86.93,5.84,81.91,5.76C76.2,5.68,74.43,1.5,68.22.82c-6.38-.7-6.13,3.52-13.43,4.12C46.53,5.62,46,.24,37.6.82c-7.24.51-6.75,4.54-13.43,4.12C18,4.56,15.87,1,9.94,1.65,5.55,2.14,0,4.94,0,6.59V14H94Z"></path>
        </svg>
      </div>
      <div className="bg-general py-12 text-white">
        <div className="text-center space-y-2">
          <h1 className="text-3xl lg:text-4xl font-bold">Customer reviews.</h1>
          <h2 className="text-lg lg:text-xl">
            98,7% of those who tested it approved it.
          </h2>
          <p className="text-xl font-semibold">
            <span className="lg:text-7xl text-5xl font-bold">4.7</span>/5
          </p>
          <div className="flex space-x-[px] items-center lg:text-xl text-lg justify-center">
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
            <h1 className="pl-2 font-semibold text-neutral-800">
              Based on 197 Reviews
              
            </h1>
          </div>
        </div>

        <div className="review">
          <Swiper
            className="my-10"
            freeMode={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                navigation: false,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
                navigation: true,
              },
            }}
            spaceBetween={20}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            navigation
          >

            
            <SwiperSlide key="1" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto1}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name1}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note1}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis1}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="2" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto2}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name2}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note2}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis2}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="3" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto3}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name3}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note3}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis3}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="4" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto4}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name4}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note4}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis4}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="5" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto5}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name5}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note5}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis5}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="6" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto6}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name6}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note6}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis6}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="7" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto7}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name7}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note7}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis7}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="8" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto8}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name8}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note8}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis8}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="9" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto9}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name9}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note9}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis9}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="10" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto10}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name10}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note10}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis10}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="11" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto11}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name11}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note11}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis11}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="12" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto12}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name12}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note12}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis12}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="13" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto13}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name13}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note13}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis13}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="14" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto14}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name14}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note14}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis14}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="15" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto15}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name15}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note15}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis15}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="16" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto16}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name16}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note16}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis16}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="17" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto17}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name17}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note17}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis17}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="18" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto18}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name18}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note18}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis18}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="19" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto19}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name19}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note19}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis19}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide key="20" className="">
              <div className="text-black  m-auto  space-y-2 w-[280px]">
                <div className="m-auto w-full p-2 rounded">
                  <img
                    className=" w-[80%] m-auto  rounded flex items-center"
                    alt=""
                    width="300px"
                    height="330px"
                    src={review_lienphoto20}
                  />
                </div>
                <div className="bg-white rounded ">
                  <div className="flex justify-between p-2">
                    <h1 className="font-bold">{review_name20}</h1>
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
                      <h1 className="pl-2 font-semibold text-neutral-800">
                       {review_note20}
                      </h1>
                    </div>
                  </div>
                  <p className=" px-2 pb-2">
                   {review_avis20}
                  </p>
                </div>
              </div>
            </SwiperSlide>
       
           
          </Swiper>
        </div>
      </div>
      
      <div>
        <svg
          fill="#19806D"
          className="hidden lg:block rotate-180 "
          xmlns="http://www.w3.org/2000/svg"
          id="Calque_1"
          data-name="Calque 1"
          viewBox="0 0 350 20"
        >
          <path d="M180,7"></path>
          <polygon points="0 20 175 0 350 20 0 20"></polygon>
        </svg>
        <svg
          fill="#19806D"
          className="lg:hidden rotate-180 mt-[-0.01em]  "
          xmlns="http://www.w3.org/2000/svg"
          id="Calque_1"
          data-name="Calque 1"
          viewBox="0 0 93.67 11"
        >
          <polygon points="0 11 46.84 0 93.67 11 0 11"></polygon>
        </svg>
      </div>
      
      </>
  );
}
export default Reviews;
