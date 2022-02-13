
import { ChevronRightIcon } from "@heroicons/react/solid";
import Head from 'next/head'
import { site_nom, site_adresse } from '../../lib/config';
function Track() {
  return (
    <>
    <Head><title>{site_nom} - Track my order</title></Head>
      <header className="bg-general top-10 py-5 z-2 pb-10 lg:pb-5">
        <article className="relative z-0 w-4/5 m-auto ">
          <span className="lg:text-[120px] text-6xl font-bold  text-neutral-200  absolute z-[-1] opacity-10  left-[-30px]">
            Track my order
          </span>
          <h2 className="text-white font-bold text-6xl lg:pt-10 pt-5 lg:pl-12">
            Track my order
          </h2>
          <p className="text-white text-xl pt-3 lg:pl-12">
            Find out where your order is
          </p>
        </article>
      </header>

      <main className="bg-[#F6F6F6] ">
        <section className="lg:w-3/5 m-auto lg:space-x-28 pb-10 lg:flex  ">
          <article className="lg:w-3/5 m-auto space-y-8 mt-[-20px]">
            <div className="bg-white p-8">
              <form className="space-y-10 ">
                <input
                  className=" pb-3 border-b border-neutral  w-full outline-0  p-2 flex-1  bg-transparent  text-neutral-500 placeholder:text-neutral-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                />

                <input
                  className=" pb-3  border-b border-neutral  w-full outline-0  p-2 flex-1  bg-transparent  text-neutral-500 placeholder:text-neutral-500"
                  type="text"
                  id="orderid"
                  name="orderid"
                  placeholder="Order ID"
                />

                <div className="flex items-center justify-between">
                  <button className="bg-black text-white font-semibold py-3 px-10">
                    TRACK MY ORDER
                  </button>
                </div>
              </form>
            </div>
          </article>
        </section>
      </main>

    
    </>
  );
}
export default Track;
