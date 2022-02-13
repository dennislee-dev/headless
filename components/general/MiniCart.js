import { Fragment, useContext, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "../../context/shopContext";
import { formatter } from "../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTrash, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { useState } from "react";

export default function MiniCart({ cart }) {
  const cancelButtonRef = useRef();


  const { cartOpen, setCartOpen, checkoutUrl, removeCartItem, link } =
    useContext(CartContext);

  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  const [load, setLoad] = useState(false);


  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog
        initialFocus={cancelButtonRef}
        as="div"
        className="fixed z-50 inset-0 overflow-hidden"
        onClose={() => {
          setCartOpen(!cartOpen);
        }}
      >
        <div className=" absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-xl text-gray-900 font-bold ">
                        Your cart
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center outline-0">
                        <div
                          ref={cancelButtonRef}
                          type="button"
                          className=" cursor-pointer outline-0 -m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setCartOpen(false)}
                        >
                          <span className=" outline-0 sr-only">
                            Close panel
                          </span>
                          <XIcon
                            className=" outline-0 h-6 w-6"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        {cart.length > 0 ? (
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cart.map((product) => (
                              <li
                                key={product.id + Math.random()}
                                className="py-6 flex"
                              >
                                <div className="relative flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                  <Image
                                    src={product.image}
                                    alt={product.title}
                                    layout="fill"
                                    objectFit="cover"
                                  />
                                </div>

                                <div className="ml-4 flex-1 flex flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <Link
                                          href={`/products/${product.handle}`}
                                          passHref
                                        >
                                          <a onClick={() => setCartOpen(false)}>
                                            {product.title}
                                          </a>
                                        </Link>
                                      </h3>
                                      <button
                                        onClick={() =>
                                          removeCartItem(product.id)
                                        }
                                        type="button"
                                        className="font-medium text-sm text-gray-500 hover:text-gray-800"
                                      >
                                        <FontAwesomeIcon
                                          icon={faTrash}
                                          className="text-neutral-400"
                                        ></FontAwesomeIcon>
                                      </button>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.variantTitle}
                                    </p>
                                  </div>
                                  <div className="flex-1 flex items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Qty {product.variantQuantity}
                                    </p>

                                    <div className="flex">
                                      <p className="ml-4 text-black font-semibold text-lg">
                                        {formatter.format(product.variantPrice)}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="flex justify-center items-center">
                            <p>Your cart is empty!</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {cart.length > 0 ? (
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-sm text-gray-900">
                        <p>Original Price</p>
                        <p className="text-sm">
                          {formatter.format(cartTotal * 1.6)}
                        </p>
                      </div>
                      <div className="flex justify-between text-sm text-gray-900">
                        <p>Destocking limited discount</p>
                        <p className="text-sm">
                          -{formatter.format(cartTotal * 1.6 - cartTotal)}
                        </p>
                      </div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p className="text-lg">{formatter.format(cartTotal)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        You are eligible to free shipping
                      </p>
                      <div  className="mt-6">
                        <a onClick={() =>setLoad(!load)}
                          href={link}
                          className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-general hover:opacity-80"
                        >
                          {load ? <svg
                            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              class="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              stroke-width="4"
                            ></circle>
                            <path
                              class="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg> : '' }
                          Confirm my cart →
                        </a>
                      </div>
                      {/* <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                          <p>
                            or{' '}
                            <button
                              type="button"
                              className="font-medium hover:text-gray-800"
                              onClick={() => setCartOpen(false)}
                            >
                              Continue Shopping<span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div> */}
                    </div>
                  ) : null}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
