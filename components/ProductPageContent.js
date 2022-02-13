import SwiperCore, {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Virtual,
  Autoplay,
} from "swiper";
import "swiper/swiper-bundle.css";
import Infos from "./general/infos";

import { useState } from "react";
import FAQItem from "./product/faqprod/faqitem";
import Avantages from "./general/avantages";
import Imageprod from "../components/product/imageprod";
import Details from "../components/product/details";
import H1 from "../components/product/h1";
import Title from "../components/product/title";
import Phrase from "../components/product/phrase";
import Imgproduit from "../components/product/imageproduit";
import Argu3 from "../components/product/argu3";
import Reviews from "../components/product/reviews";

import {
  avantages_1,
  avantages_2,
  avantages_3,
  avantages_4,
  description_accroche1,
  description_titre1,
  description_titre2,
  description_titre3,
  description_titre4,
  description_titre5,
  description_titre6,
  description_paragraphe1,
  description_paragraphe2,
  description_paragraphe3,
  description_paragraphe4,
  description_paragraphe5,
  description_paragraphe6,
  description_image1,
  description_image2,
  description_image3,
  description_image4,
  description_image5,
  description_image6,
  description_image7,
  description_image8,
  description_argument1,
  description_argument2,
  description_argument3,
  description_argument4,
  description_argument5,
  description_argument6,
} from "../lib/config";

export default function ProductPageContent({ product }) {
  SwiperCore.use([Navigation, Thumbs, Pagination, Virtual, Autoplay]);
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 600;
  let prependNumber = 1;

  const prepend = () => {
    swiperRef.virtual.prependSlide([
      "Slide " + --prependNumber,
      "Slide " + --prependNumber,
    ]);
  };

  const append = () => {
    swiperRef.virtual.appendSlide("Slide " + ++appendNumber);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <section className="lg:flex  w-full mb-10">
        <Imageprod product={product} />

        <Details product={product} />
      </section>

      <Avantages
        av1={avantages_1}
        av2={avantages_2}
        av3={avantages_3}
        av4={avantages_4}
      />

      {/* Phrase d'accroche */}
      <section className="lg:w-2/5 lg:p-0 p-4 m-auto">
        <H1 h1={description_accroche1} />

        {description_titre1 ? <Title titre={description_titre1} /> : ""}
        {description_paragraphe1 ? (
          <Phrase phrase={description_paragraphe1} />
        ) : (
          ""
        )}

        {description_image1 ? <Imgproduit lien={description_image1} /> : ""}

        {description_titre2 ? <Title titre={description_titre2} /> : ""}
        {description_paragraphe2 ? (
          <Phrase phrase={description_paragraphe2} />
        ) : (
          ""
        )}
        {description_argument1 ? (
          <Argu3
            argument1={description_argument1}
            argument2={description_argument2}
            argument3={description_argument3}
          />
        ) : (
          ""
        )}


        {description_image2 ? <Imgproduit lien={description_image2} /> : ""}

        {description_titre3 ? <Title titre={description_titre3} /> : ""}
        {description_paragraphe3 ? (
          <Phrase phrase={description_paragraphe3} />
        ) : (
          ""
        )}
        {description_image3 ? <Imgproduit lien={description_image3} /> : ""}

        {description_titre4 ? <Title titre={description_titre4} /> : ""}
        {description_paragraphe4 ? (
          <Phrase phrase={description_paragraphe4} />
        ) : (
          ""
        )}
        {description_argument4 ? (
          <Argu3
            argument1={description_argument4}
            argument2={description_argument5}
            argument3={description_argument6}
          />
        ) : (
          ""
        )}
        {description_image4 ? <Imgproduit lien={description_image4} /> : ""}

        {description_titre5 ? <Title titre={description_titre5} /> : ""}
        {description_paragraphe5 ? (
          <Phrase phrase={description_paragraphe5} />
        ) : (
          ""
        )}
        {description_image5 ? <Imgproduit lien={description_image5} /> : ""}

        {description_titre6 ? <Title titre={description_titre6} /> : ""}
        {description_paragraphe6 ? (
          <Phrase phrase={description_paragraphe6} />
        ) : (
          ""
        )}
        {description_image6 ? <Imgproduit lien={description_image6} /> : ""}

        {description_image7 ? <Imgproduit lien={description_image7} /> : ""}
        {description_image8 ? <Imgproduit lien={description_image8} /> : ""}

        

        
      </section>

      <Reviews />

      <div className="bg-white p-8 lg:w-2/5 m-auto">
        <h1 className="font-bold text-4xl pb-5 text-center">Your questions</h1>

        <FAQItem />
      </div>
      <Infos />
    </>
  );
}
