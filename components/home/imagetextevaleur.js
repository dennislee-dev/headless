import { CheckCircleIcon, HomeIcon } from "@heroicons/react/solid";
import Image from 'next/image'

function ITV({titre, texte1, texte2, texte3, multi1, multi2, multitre1, multitre2, multitexte1, multitexte2, texteimage, lien}) {
  return (
    <>
      <section className="lg:flex  w-4/5 m-auto  py-10 lg:space-x-[100px] lg:space-y-0 space-y-10 ">
        <article className="space-y-5 lg:w-[1500px]">
          <h1 className="font-bold text-2xl lg:text-4xl">
           {titre}
          </h1>
          <p>
           {texte1}
          </p>

          <p>
            {texte2}
          </p>
          <p>
            {texte3}
          </p>
        </article>
        <article className="text-center w-full m-auto">
        <Image
        alt="Mountains"
        src={lien}
        width="400px"
        height="400px"
        quality={100}
      />
          {/* <img className="m-auto w-[400px]" src="../../public/amd.jpg" alt="" /> */}
        </article>
      </section>

      <section className="lg:flex  w-4/5 m-auto  py-10 lg:space-x-[500px] lg:space-y-0 space-y-10">
        <div className="lg:flex lg:space-x-10 lg:space-y-0 space-y-5">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-[#1D6A5C]">{multi1}</h1>
            <h2 className="font-bold">{multitre1}</h2>
            <p>
              {multitexte1}
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-[#1D6A5C]">{multi2}</h1>
            <h2 className="font-bold">{multitre2}</h2>
            <p>
            {multitexte2}
            </p>
          </div>

          <div className="border p-5 flex space-x-5 items-center">
            <icon>
              <CheckCircleIcon className=" w-6 text-[#1D6A5C]" />
            </icon>
            <p>
              {texteimage}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default ITV;
