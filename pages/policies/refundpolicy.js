import { HomeIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Head from "next/head";
import { site_nom, site_adresse } from "../../lib/config";

function Refundpolicy() {
  return (
    <>
      <title>{site_nom} - Privacy policy</title>
      <header className="bg-general top-10 py-5 z-2 pb-10 lg:pb-5">
        <article className="relative z-0 w-4/5 m-auto ">
          <span className="lg:text-[120px] text-6xl font-bold  text-neutral-200  absolute z-[-1] opacity-10  left-[-30px]">
            Refund Policy.
          </span>
          <h2 className="text-white font-bold text-6xl lg:pt-10 pt-5 lg:pl-12">
            Refund Policy.
          </h2>
          <p className="text-white text-xl pt-3 lg:pl-12"></p>
        </article>
      </header>

      <section className="bg-neutral-100 py-1">
        <article className="flex items-center m-auto w-3/5 space-x-2">
          <div>
            <Link href="/" passHref>
              <HomeIcon className=" w-4 text-black hover:text-[#72839f] cursor-pointer" />
            </Link>
          </div>
          <div>
            <ChevronRightIcon outline className=" w-4 text-black" />
          </div>
          <h1 className="text-sm font-[500]">Refund Policy</h1>
        </article>
      </section>

      <section className="py-10">
        <article className=" w-11/12 lg:w-5/12 m-auto">
          <article className="space-y-4">
            <h1 className="font-bold">RETURNS</h1>
            <p>----</p>
            <p>
              Please read the technical details carefully before ordering the
              PRODUCT NAME. These can be found in our Frequently Asked Questions
              page or can be requested by e-mail. If there is a problem with
              your item, a new product can be requested if yours is defective.
              We will send you a new item free of charge.
              <br />
              <br />
              If you are claiming a refund but your package is already in the
              process of being delivered, please wait until you receive your
              package and send it back to us. A refund will be issued once your
              package is in our possession. Please contact us at
              contact@heybreal.com for your refund request. The return of the
              package must be done with a tracking number, so our staff can
              follow the delivery status of your return.
            </p>
            <h1 className="font-bold">REFUNDS</h1>
            <p>----</p>
            <p>
              The right of withdrawal is possible within 14 days after receipt
              of your package. You just have to send us back the package and you
              will be fully refunded. Return address: WENZHOU YUEJI TRADING ROOM
              614, BLOCK 6, WANDA PLAZA, WENZHOU CITY, ZHEJIANG PROVINCE,
              CHINA/CHINE If you are shipping an item, you should consider using
              a shipping service that allows you to track the shipment or
              purchase shipping insurance. We do not guarantee that we will
              receive the item you return. The NAMEBRAND warranty covers any
              technical problems with the NAMEBRAND vacuum cleaner.
            </p>
            <h1 className="font-bold">Other items that cannot be returned:</h1>
            <p>
              * Gift cards
              <br />
              <br />* Downloadable software
              <br />
              <br />* Certain health and personal care products
              <br />
              <br />
              To make a return, you must present us with a receipt or proof of
              purchase.
              <br />
              <br />
              There are certain situations where only a partial refund will be
              given: (if applicable)
              <br />
              <br />* Any item that is not in its original condition, is damaged
              or has some parts missing for reasons that are not due to an error
              on our part.
              <br />
              <br />
              Once we have received and inspected the returned item, we will
              send you an email to confirm that we have received it. We will
              also inform you of our decision on whether to approve or reject
              your refund request.
              <br />
              <br />
              If your request is approved, then your refund will be processed,
              and a credit will automatically be applied to your credit card or
              original payment method, within 7 business days.
            </p>
            <h1 className="font-bold">
              Late or Missing Refunds (if applicable)
            </h1>
            <p>
              If you have not yet received your refund, please check your bank
              account again first.
              <br />
              <br />
              Next, contact your credit card company as there may be a delay
              before your refund is officially posted.
              <br />
              <br />
              Next, contact your bank. There is often a processing time required
              before a refund is posted.
              <br />
              <br />
              If after completing all of these steps you have not received your
              refund, please contact us at contact@heybreal.com
            </p>
            <h1 className="font-bold">Exchanges (if applicable)</h1>
            <p>
              We will only replace an item if it is defective or damaged. If in
              this case you would like to exchange it for the same item, please
              send us an email at contact@heybreal.com.
            </p>
            <h1 className="font-bold">Gifts</h1>
            <p>
              If the returned item was identified as a gift at the time of
              purchase and was sent directly to you, you will receive a gift
              credit equal to the value of your return. Once we receive the
              returned item, a gift certificate will be mailed to you.
              <br />
              <br />
              If the item was not identified as a gift at the time of purchase,
              or if the gift giver preferred to receive the item first and give
              it to you later, we will send a refund to the gift giver and they
              will know that you returned the item. Depending on where you live,
              the time it takes to receive your exchanged product may vary.
            </p>
          </article>
        </article>
      </section>
    </>
  );
}
export default Refundpolicy;
