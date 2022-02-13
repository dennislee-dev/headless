import Timer from "./timer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { formatter } from "../../utils/helpers";
import { useState, useContext, useEffect } from "react";
import ProductOptions from "./options";
import { CartContext } from "../../context/shopContext";

function Details({ product }) {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);
  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: quantity,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);
  const [actualPrice, setActualPrice] = useState(
    product.variants.edges[0].node.priceV2.amount
  );

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);

        setActualPrice(item.variantPrice);
      }
    });
  }

  return (
    <div className="w-full ">
      <div className="lg:w-3/5">
        <div className=" p-5 lg:p-[50px] space-y-4 ">
          <h2 className="font-bold text-medium animation-fade text-general">
            BEST SELLER IN UK
          </h2>
          <h1 className="font-bold text-2xl 	lg:text-3xl  border-l-[5px] border-general pl-2">
            {product.title}
          </h1>
          <div className="flex space-x-[-2px] items-center ">
            <FontAwesomeIcon
              icon={faStar}
              className="text-general"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faStar}
              className="text-general"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faStar}
              className="text-general"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faStar}
              className="text-general"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faStarHalfAlt}
              className="text-general"
            ></FontAwesomeIcon>
            <h1 className="pl-2 font-semibold text-neutral-800">
              4,7/5, 197 Reviews
            </h1>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            <span className="font-bold text-xl text-general">
              {formatter.format(actualPrice)}
            </span>
            <span className="text-xl text-neutral-800 line-through font-semibold	">
              {formatter.format(actualPrice * 1.6)}
            </span>

            <span className="bg-general text-white font-semibold p-1 rounded text-sm">
              {" "}
              40% OFF + Free Delivery
            </span>
          </div>
          <p className="lg:w-[600px]">Description</p>

          {product.options.map(({ name, values }) => (
            <ProductOptions
              key={`key-${name}`}
              name={name}
              values={values}
              selectedOptions={selectedOptions}
              setOptions={setOptions}
            />
          ))}

          <button
            onClick={() => {
              addToCart(selectedVariant);
            }}
            className="bg-neutral-800 py-[15px] w-full  text-white  font-bold rounded bg-general"
          >
            ADD TO CART - {formatter.format(actualPrice)}
          </button>

          <Timer price={formatter.format(actualPrice * 1.6)} />
        </div>
      </div>
    </div>
  );
}
export default Details;
