import { useContext } from "react";
import { CartContext } from "../../context/shopContext";
import MiniCart from "./MiniCart";
import { Dialog, Transition } from '@headlessui/react'
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { MenuAlt1Icon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import { MailIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { produit_lien, produit_nom } from "../../lib/config";

export default function Nav() {
  const [drawer, setDrawer] = useState(false);
  const [navbar, setNavbar] = useState(true);

  const router = useRouter();
  const showDrawer = () => setDrawer(!drawer);

  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <>
      <header
        className={
          navbar
            ? "z-[2] border-b border-neutral-100 sticky w-full top-10 bg-white transition-colors duration-300 "
            : "z-[2] border-b border-transparent sticky w-full top-10 bg-transparent transition-colors duration-300"
        }
      >
        <div className="flex items-center h-14 lg:h-20 justify-between  lg:w-10/12 m-auto">
          <div className="menu-btn flex mx-4 lg:hidden">
            <div className="">
              <MenuAlt1Icon
                onClick={showDrawer}
                className=" w-7 text-black cursor-pointer"
              />
            </div>
          </div>

          <div className="logo lg:w-1/5 flex justify-center items-center pt-1">
            <Link href="/" passHref>
              <a>
                <svg
                  className=" h-[25px] lg:h-[30px] "
                  viewBox="0 0 474.101 100.2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 43.9 4.2 L 57.9 4.2 L 57.9 74 L 43.9 74 L 43.9 44.3 L 14 44.3 L 14 74 L 0 74 L 0 4.2 L 14 4.2 L 14 32.9 L 43.9 32.9 L 43.9 4.2 Z M 171.5 18.6 L 186.4 18.6 L 152.1 100.2 L 137.2 100.2 L 149.2 72.6 L 127 18.6 L 142.7 18.6 L 157 57.3 L 171.5 18.6 Z M 207.9 66.1 L 207.9 74 L 193.9 74 L 193.9 0 L 207.9 0 L 207.9 26.7 A 19.276 19.276 0 0 1 213.37 21.366 A 23.659 23.659 0 0 1 215.35 20.2 A 21.692 21.692 0 0 1 222.876 17.898 A 27.238 27.238 0 0 1 226.2 17.7 A 24.715 24.715 0 0 1 236.067 19.659 A 23.844 23.844 0 0 1 239.05 21.2 A 24.267 24.267 0 0 1 247.445 29.87 A 29.357 29.357 0 0 1 248.15 31.15 Q 251.5 37.6 251.5 46.1 Q 251.5 54.6 248.15 61.15 A 26.619 26.619 0 0 1 243.176 68.037 A 23.915 23.915 0 0 1 239.05 71.3 Q 233.3 74.9 226.2 74.9 A 26.615 26.615 0 0 1 220.728 74.362 A 20.506 20.506 0 0 1 215.35 72.45 A 22.285 22.285 0 0 1 210.26 68.821 A 19.692 19.692 0 0 1 207.9 66.1 Z M 122.8 50.5 L 82.3 50.5 Q 82.8 56.5 86.5 59.9 A 12.795 12.795 0 0 0 94.849 63.283 A 16.604 16.604 0 0 0 95.6 63.3 Q 103.4 63.3 106.7 56.6 L 121.8 56.6 Q 119.4 64.6 112.6 69.75 A 25.141 25.141 0 0 1 101.082 74.515 A 33.694 33.694 0 0 1 95.9 74.9 A 30.891 30.891 0 0 1 87.037 73.665 A 27.022 27.022 0 0 1 81.55 71.35 Q 75.2 67.8 71.65 61.3 Q 68.1 54.8 68.1 46.3 A 35.78 35.78 0 0 1 68.948 38.343 A 28.183 28.183 0 0 1 71.6 31.2 Q 75.1 24.7 81.4 21.2 A 27.733 27.733 0 0 1 91.438 17.977 A 35.017 35.017 0 0 1 95.9 17.7 A 31.503 31.503 0 0 1 104.265 18.776 A 27.018 27.018 0 0 1 110.05 21.1 Q 116.3 24.5 119.75 30.75 A 27.694 27.694 0 0 1 122.957 40.927 A 34.879 34.879 0 0 1 123.2 45.1 A 38.688 38.688 0 0 1 123.102 47.929 A 28.241 28.241 0 0 1 122.8 50.5 Z M 353.2 50.5 L 312.7 50.5 Q 313.2 56.5 316.9 59.9 A 12.795 12.795 0 0 0 325.249 63.283 A 16.604 16.604 0 0 0 326 63.3 Q 333.8 63.3 337.1 56.6 L 352.2 56.6 Q 349.8 64.6 343 69.75 A 25.141 25.141 0 0 1 331.482 74.515 A 33.694 33.694 0 0 1 326.3 74.9 A 30.891 30.891 0 0 1 317.437 73.665 A 27.022 27.022 0 0 1 311.95 71.35 Q 305.6 67.8 302.05 61.3 Q 298.5 54.8 298.5 46.3 A 35.78 35.78 0 0 1 299.348 38.343 A 28.183 28.183 0 0 1 302 31.2 Q 305.5 24.7 311.8 21.2 A 27.733 27.733 0 0 1 321.838 17.977 A 35.017 35.017 0 0 1 326.3 17.7 A 31.503 31.503 0 0 1 334.665 18.776 A 27.018 27.018 0 0 1 340.45 21.1 Q 346.7 24.5 350.15 30.75 A 27.694 27.694 0 0 1 353.357 40.927 A 34.879 34.879 0 0 1 353.6 45.1 A 38.688 38.688 0 0 1 353.502 47.929 A 28.241 28.241 0 0 1 353.2 50.5 Z M 403.8 26.5 L 403.8 18.6 L 417.9 18.6 L 417.9 74 L 403.8 74 L 403.8 65.9 A 19.688 19.688 0 0 1 398.86 70.809 A 24.679 24.679 0 0 1 396.35 72.35 A 21.31 21.31 0 0 1 389.133 74.651 A 27.168 27.168 0 0 1 385.4 74.9 Q 378.4 74.9 372.65 71.3 A 24.734 24.734 0 0 1 364.425 62.741 A 29.952 29.952 0 0 1 363.55 61.15 Q 360.2 54.6 360.2 46.1 Q 360.2 37.7 363.55 31.2 A 26.056 26.056 0 0 1 368.374 24.539 A 23.289 23.289 0 0 1 372.65 21.2 A 24.182 24.182 0 0 1 385.278 17.701 A 28.681 28.681 0 0 1 385.5 17.7 A 26.101 26.101 0 0 1 390.972 18.249 A 20.239 20.239 0 0 1 396.35 20.2 A 23.797 23.797 0 0 1 401.108 23.525 A 20.199 20.199 0 0 1 403.8 26.5 Z M 292.7 17.8 L 292.7 32.5 L 289 32.5 A 22.449 22.449 0 0 0 285.28 32.788 Q 283.276 33.125 281.687 33.858 A 10.037 10.037 0 0 0 279.05 35.6 A 8.784 8.784 0 0 0 276.944 38.724 Q 275.7 41.708 275.7 46.4 L 275.7 74 L 261.7 74 L 261.7 18.6 L 275.7 18.6 L 275.7 27.2 Q 278.4 22.8 282.75 20.3 A 18.85 18.85 0 0 1 290.31 17.92 A 23.395 23.395 0 0 1 292.7 17.8 Z M 431.6 0 L 445.6 0 L 445.6 74 L 431.6 74 L 431.6 0 Z M 403.8 46.3 A 21.755 21.755 0 0 0 403.417 42.115 A 15.729 15.729 0 0 0 401.8 37.55 A 14.54 14.54 0 0 0 398.388 33.335 A 13.72 13.72 0 0 0 396.4 31.95 Q 393 30 389.1 30 Q 385.2 30 381.9 31.9 A 13.928 13.928 0 0 0 377.256 36.299 A 17.098 17.098 0 0 0 376.55 37.45 A 15.719 15.719 0 0 0 374.788 42.54 A 21.102 21.102 0 0 0 374.5 46.1 A 20.612 20.612 0 0 0 374.981 50.65 A 16.106 16.106 0 0 0 376.55 54.85 A 15.763 15.763 0 0 0 379.399 58.644 A 13.876 13.876 0 0 0 381.95 60.6 Q 385.3 62.6 389.1 62.6 Q 393 62.6 396.4 60.65 A 14.018 14.018 0 0 0 401.609 55.388 A 16.714 16.714 0 0 0 401.8 55.05 A 15.793 15.793 0 0 0 403.444 50.345 A 21.887 21.887 0 0 0 403.8 46.3 Z M 237.2 46.1 Q 237.2 41.1 235.15 37.45 A 15.065 15.065 0 0 0 232.257 33.733 A 13.449 13.449 0 0 0 229.75 31.9 Q 226.4 30 222.5 30 Q 218.7 30 215.35 31.95 A 14.161 14.161 0 0 0 210.552 36.594 A 17.261 17.261 0 0 0 209.95 37.6 A 16.129 16.129 0 0 0 208.165 42.874 A 21.343 21.343 0 0 0 207.9 46.3 Q 207.9 51.3 209.95 55 Q 212 58.7 215.35 60.65 Q 218.7 62.6 222.5 62.6 Q 226.4 62.6 229.75 60.6 A 14.578 14.578 0 0 0 234.617 55.798 A 17.59 17.59 0 0 0 235.15 54.9 A 16.021 16.021 0 0 0 236.887 49.871 A 21.759 21.759 0 0 0 237.2 46.1 Z M 82.4 41.1 L 108.7 41.1 A 12.638 12.638 0 0 0 107.957 36.927 A 10.707 10.707 0 0 0 104.8 32.45 A 13.474 13.474 0 0 0 96.931 29.257 A 17.54 17.54 0 0 0 95.5 29.2 A 14.181 14.181 0 0 0 90.988 29.892 A 12.092 12.092 0 0 0 86.75 32.35 A 12.689 12.689 0 0 0 83.169 37.839 A 17.77 17.77 0 0 0 82.4 41.1 Z M 312.8 41.1 L 339.1 41.1 A 12.638 12.638 0 0 0 338.357 36.927 A 10.707 10.707 0 0 0 335.2 32.45 A 13.474 13.474 0 0 0 327.331 29.257 A 17.54 17.54 0 0 0 325.9 29.2 A 14.181 14.181 0 0 0 321.388 29.892 A 12.092 12.092 0 0 0 317.15 32.35 A 12.689 12.689 0 0 0 313.569 37.839 A 17.77 17.77 0 0 0 312.8 41.1 Z M 462.634 74.282 A 10.067 10.067 0 0 0 465.6 74.7 A 10.931 10.931 0 0 0 466.505 74.663 A 8.148 8.148 0 0 0 471.7 72.35 Q 474.1 70 474.1 66.5 A 10.092 10.092 0 0 0 474.099 66.337 A 7.829 7.829 0 0 0 471.7 60.65 A 7.934 7.934 0 0 0 468.587 58.749 A 9.532 9.532 0 0 0 465.6 58.3 Q 461.8 58.3 459.35 60.65 Q 456.9 63 456.9 66.5 A 9.85 9.85 0 0 0 456.902 66.718 A 7.744 7.744 0 0 0 459.35 72.35 A 8.127 8.127 0 0 0 462.634 74.282 Z" />
                </svg>
              </a>
            </Link>
          </div>

          <nav className="hidden lg:flex ">
            <ul className="flex space-x-5 font-[500] text-sm hover:cursor-pointer uppercase text-black">
              <Link href={produit_lien} passHref>
                <li className=" first:bg-general first:text-white p-1">
                  {produit_nom}.
                </li>
              </Link>
              <Link as="/aboutus" href="/general/aboutus" passHref>
                <li className="p-1">About us.</li>
              </Link>
              <Link as="/faq" href="/general/faq" passHref>
                <li className="p-1">FAQ.</li>
              </Link>
              <Link as="/track" href="/general/track" passHref>
                <li className="p-1">Track my order.</li>
              </Link>
              <Link as="/contact us" href="/general/contactus" passHref>
                <li className="p-1">Contact us.</li>
              </Link>
            </ul>
          </nav>

          <div
            onClick={() => setCartOpen(!cartOpen)}
            className="cart flex mx-4 lg:w-1/5 justify-center"
          >
            <ShoppingBagIcon className="w-7 text-black  cursor-pointer" />
          </div>
        </div>

        {/* Menu Drawer */}
        <div
          className={
            drawer
              ? " fixed top-0 bg-white h-full w-4/5 left-0  duration-500 transition-all lg:hidden"
              : " flex fixed top-0 bg-white h-full w-full left-[-100%] lg:hidden"
          }
        >
          <div className="border-b-2 border-neutral-100 h-16 w-full flex justify-between p-5 items-center">
            <span className="font-bold text-xl">Menu</span>
            <span className="bg-neutral-100 p-2">
              <XIcon
                onClick={showDrawer}
                className=" w-5 font-bold text-black  cursor-pointer"
              />
            </span>
          </div>

          <div>
            <ul className="space-y-4 font-semibold p-5 text-lg border-b-2 border-neutral-100">
              <Link href={produit_lien} passHref>
                <li  onClick={showDrawer} className=" cursor-pointer">{produit_nom}.</li>
              </Link>
              <Link   as="/aboutus" href="/general/aboutus" passHref>
                <li onClick={showDrawer} className=" cursor-pointer">About us.</li>
              </Link>
              <Link as="/faq" href="/general/faq" passHref>
                <li  onClick={showDrawer} className=" cursor-pointer">FAQ.</li>
              </Link>
              <Link as="/track" href="/general/track" passHref>
                <li  onClick={showDrawer} className=" cursor-pointer">Track my order.</li>
              </Link>
              <Link as="/contactus" href="/general/contactus" passHref>
                <li  onClick={showDrawer} className=" cursor-pointer">Contact us.</li>
              </Link>
            </ul>
          </div>

          <div>
            <ul className="space-y-4  p-5  ">
              <Link href="/policies/refundpolicy" passHref>
                <li  onClick={showDrawer} className=" cursor-pointer">Refund Policy</li>
              </Link>
              <Link href="/policies/privacypolicy" passHref>
                <li  onClick={showDrawer} className=" cursor-pointer">Privacy Policy</li>
              </Link>
              <Link href="/policies/tos" passHref>
                <li  onClick={showDrawer} className=" cursor-pointer">Terms of sales</li>
              </Link>
              <Link href="/policies/legalnotice" passHref>
                <li  onClick={showDrawer} className=" cursor-pointer">Legal notice</li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
      {/* <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">
              Shopify + Next.js
            </span>
          </a>
        </Link>
        <a 
          className="text-md font-bold cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
          >
          Cart ({cartQuantity})
        </a>
       
      </div>
    </header> */}{" "}
      <MiniCart className="z-[9999999999]" cart={cart} />
    </>
  );
}
