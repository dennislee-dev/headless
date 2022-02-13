import { ChevronRightIcon } from "@heroicons/react/solid";
import Head from "next/head";
import {site_nom,
  about_paragraphe1,
  about_paragraphe2,
  about_paragraphe3,
  about_paragraphe4,
  about_paragraphe5,
} from "../../lib/config";

function About() {
  return (
    <>
      <Head>
        <title>{site_nom} - About us</title>
      </Head>

      <header className="bg-general  py-5 z-2 pb-10 lg:pb-5">
        <article className="relative z-0 w-4/5 m-auto ">
          <span className="lg:text-[120px] text-6xl font-bold  text-neutral-200  absolute z-[-1] opacity-10  left-[-30px]">
            About us
          </span>
          <h2 className="text-white font-bold text-6xl lg:pt-10 pt-5 lg:pl-12">
            About us
          </h2>
          <p className="text-white text-xl pt-3 lg:pl-12">
            Discover our brand history
          </p>
        </article>
      </header>

      <main className="bg-[#F6F6F6] ">
        <section className="lg:w-3/5 m-auto lg:space-x-28 pb-10 lg:flex  ">
          <article className="lg:w-3/5 m-auto space-y-8 mt-[-20px]">
            <div className="bg-white p-8 space-y-2">
              <p>{about_paragraphe1}</p>
              <p>{about_paragraphe2}</p>
              <p>{about_paragraphe3}</p>
              <p>{about_paragraphe4}</p>
              <p>{about_paragraphe5}</p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
export default About;
