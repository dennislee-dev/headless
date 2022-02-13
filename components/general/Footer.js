import { MailIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { site_nom, site_email } from "../../lib/config";

function Footer() {
  return (
    <footer className=" bg-[#262626] text-white pt-15 lg:p-10 p-2 h-auto ">
      <section className="lg:h-[250px]  lg:w-4/5 m-auto lg:flex justify-between">
        <article className="relative z-0 ">
          <div>
            <span className="lg:text-8xl text-6xl font-bold text-neutral-700 absolute z-[-1]  opacity-10 left-[-5px] lg:left-[-30px]">
              Newsletter
            </span>
            <h2 className="lg:text-4xl text-3xl font-bold pt-5 lg:pl-10 pl-5">
              Receive our good plans
            </h2>
            <h1 className="text-xl   pl-5 lg:pl-10">and our latest news !</h1>

            <section className="border-b border-neutral-500 flex items-center lg:pb-3 mb-7 lg:mb-0 lg:ml-10 pt-5 justify-between w-4/5 ">
              <article>
                <input
                  className=" outline-0 rounded p-2 flex-1  bg-transparent  text-neutral-500 placeholder:text-neutral-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your e-mail address"
                />
              </article>
              <article>
                <div className="block lg:flex  ">
                  <button className="  lg:flex-1  items-center font-semibold text-sm uppercase flex justify-center space-x-2">
                    <h1>Subscribe</h1>
                    {/* <MailIcon className="w-6" /> */}
                  </button>
                </div>
              </article>
            </section>
          </div>
        </article>

        <div className="lg:flex lg:space-x-20 space-y-10 lg:space-y-0">
          <div className="space-y-3 text-sm">
            <h1 className="font-bold ">OUR MISSION.</h1>
            <p className="cursor-pointer">
              <a href="/product">Accuponcture LotusPro.</a>
            </p>
            <Link href="/aboutus" passHref>
              <h1 className="cursor-pointer">About us.</h1>
            </Link>
          </div>
          <article className="space-y-3 text-sm ">
            <h1 className="font-bold">FOLLOW.</h1>
            <Link href="/track" passHref>
              <p className="cursor-pointer">Track my parcel.</p>
            </Link>
          </article>
          <article className="space-y-3 text-sm ">
            <h1 className="font-bold">HELP.</h1>
            <Link href="/faq" passHref>
              <p className="cursor-pointer">FAQ.</p>
            </Link>
            <Link href="/contactus" passHref>
              <p className="cursor-pointer">Contact us.</p>
            </Link>
            <p className="cursor-pointer">{site_email}</p>
          </article>
        </div>
      </section>

      <section className="lg:flex justify-between lg:w-4/5 m-auto lg:mt-0 my-5 lg:my-0 lg:space-y-0 space-y-5">
        <article className="">
          <ul className="lg:flex lg:space-x-2 space-y-2 lg:space-y-0 uppercase text-xs font-bold">
            <Link href="/policies/refundpolicy" passHref>
              <li className="cursor-pointer">Refund Policy</li>
            </Link>
            <Link href="/policies/privacypolicy" passHref>
              <li className="cursor-pointer">Privacy Policy</li>
            </Link>
            <Link href="/policies/tos" passHref>
              <li className="cursor-pointer">Terms of Sales</li>
            </Link>
            <Link href="/policies/legalnotice" passHref>
              <li className="cursor-pointer">LEGAL NOTICE</li>
            </Link>
          </ul>
        </article>
        <article className="uppercase text-xs font-bold text-neutral-400">
          © {site_nom} 2022
        </article>
      </section>
    </footer>
  );
}
export default Footer;
