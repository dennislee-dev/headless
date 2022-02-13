import { ChevronRightIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Data } from "./faqdata";
import { useState } from "react";

function FAQitem() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
      {Data.map((item, index) => {
        return (
          
      




            <div key={index} className="  border-b border-neutral-200   ">
              <div
                onClick={() => toggle(index)}
                
                className="py-5 flex items-center justify-between	cursor-pointer"
              >
                <span className="font-semibold">{item.question}</span>
                {clicked === index ? (
                  <ChevronDownIcon className="w-6 " />
                ) : (
                  <ChevronRightIcon className="w-6 " />
                )}
              </div>
              {clicked === index ? (
                <div className="p-5"> {item.reponse}</div>
              ) : null}{" "}
            </div>
          
        );
      })}
    </>
  );
}
export default FAQitem;
