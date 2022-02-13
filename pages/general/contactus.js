import Head from "next/head";
import { site_nom, site_email } from "../../lib/config";

function Contactus() {
  return (
    <>
      <Head>
        <title>{site_nom} - Contact us</title>
      </Head>

      <header className="bg-general top-10 py-5 z-2 pb-10 lg:pb-5">
        <article className="relative z-0 w-4/5 m-auto ">
          <span className="lg:text-[120px] text-6xl font-bold  text-neutral-200  absolute z-[-1] opacity-10  left-[-30px]">
            Contact.
          </span>
          <h2 className="text-white font-bold text-6xl lg:pt-10 pt-5 lg:pl-12">
            Contact.
          </h2>
          <p className="text-white text-xl pt-3 lg:pl-12">Talk to us.</p>
        </article>
      </header>

      <main className="bg-[#F6F6F6] ">
        <section className="lg:w-3/5 m-auto lg:space-x-28 pb-10 lg:flex ">
          <article className="w-[250px] lg:block hidden">
            <h1 className="text-black font-bold text-2xl py-10">
              Contact us in other ways.
            </h1>
            <h2 className="uppercase font-bold text-sm pb-3 text-general">
              Livechat
            </h2>
            <p className="text-sm pb-10">
              Monday to Friday from 9am to 7pm on Livechat.
            </p>

            <h2 className="uppercase font-bold text-sm pb-3 text-general">
              Email
            </h2>
            <p className="text-sm pb-10">
              Write. Exchange. Discuss. : {site_email}
            </p>
          </article>
          <article className="w-full space-y-8 mt-[-20px]">
            <div className="bg-white p-8">
              <h1 className="font-bold text-4xl pb-5">Who are you?</h1>
              <p>
                Choose a topic from the following options to access the
                associated application.
              </p>
            </div>
            <div className="bg-white p-8">
              <h1 className="font-bold text-4xl pb-5">Customers</h1>
              <p>Recommend. Ask. Comment. Share. Tell each other everything.</p>
              <form className="space-y-10 pt-10">
                <input
                  className=" pb-3  border-b border-neutral w-full outline-0  p-2 flex-1  bg-transparent  text-neutral-500 placeholder:text-neutral-500"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                />

                <input
                  className=" pb-3  border-b border-neutral  w-full outline-0  p-2 flex-1  bg-transparent  text-neutral-500 placeholder:text-neutral-500"
                  type="text"
                  id="orderid"
                  name="orderid"
                  placeholder="Order ID"
                />

                <input
                  className=" pb-3 border-b border-neutral  w-full outline-0  p-2 flex-1  bg-transparent  text-neutral-500 placeholder:text-neutral-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                />

                <input
                  className=" pb-3 border-b border-neutral  w-full outline-0  p-2 flex-1  bg-transparent  text-neutral-500 placeholder:text-neutral-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Message"
                />

                <div className="flex items-center justify-between">
                  <button className="bg-black text-white font-semibold py-3 px-10">
                    SEND
                  </button>
                  <p className="text-neutral-500 hidden lg:block">
                    We answer you quickly
                  </p>
                </div>
              </form>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
export default Contactus;
