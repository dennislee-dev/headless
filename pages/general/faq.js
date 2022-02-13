

import { ChevronRightIcon } from "@heroicons/react/solid";
import FAQItem from "../../components/faqitems/faqitem";
import Head from 'next/head'
import { site_nom, site_adresse } from '../../lib/config';

function FAQ() {




  return (
    <>
<Head><title>{site_nom} - Frequently Asked questions</title></Head>

      <header className="bg-general top-10 py-5 z-2 pb-10 lg:pb-5">
        <article className="relative z-0 w-4/5 m-auto ">
          <span className="lg:text-[120px] text-6xl font-bold  text-neutral-200  absolute z-[-1] opacity-10  left-[-30px]">
            FAQ.
          </span>
          <h2 className="text-white font-bold text-6xl lg:pt-10 pt-5 lg:pl-12">
            FAQ.
          </h2>
          <p className="text-white text-xl pt-3 lg:pl-12">
            Find answers to your questions.
          </p>
        </article>
      </header>

      <main className="bg-[#F6F6F6] ">
        <section className="lg:w-3/5 m-auto lg:space-x-28 pb-10 lg:flex  ">
          <article className="w-[450px] h-[220px] lg:block hidden bg-white p-5 space-y-2 ">
            <h1 className="text-white text-sm p-2 bg-general cursor-pointer ">
              GENERAL.
            </h1>
            {/* <h1 className="text-black text-sm p-2  cursor-pointer">GENERAL.</h1>
			<h1 className="text-black text-sm p-2  cursor-pointer">GENERAL.</h1>
			<h1 className="text-black text-sm p-2  cursor-pointer">GENERAL.</h1> */}
          </article>
          <article className="w-full space-y-8 mt-[-20px]">

			  
            <div className="bg-white p-8">
              <h1 className="font-bold text-4xl pb-5">General</h1>

			  <FAQItem/>

              
            </div>
          </article>
        </section>
      </main>
 
    </>
  );
}
export default FAQ;
