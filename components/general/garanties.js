import { ShieldCheckIcon, TruckIcon, ClockIcon, SupportIcon } from '@heroicons/react/outline'

function Garanties() {
    return (
        <section className="lg:flex w-full h-auto items-center text-white ">
        <article className="bg-general bg-opacity-70 w-full text-center items-center text-sm py-3 ">
            <div className="w-[50px] lg:w-[60px] pl-2 lg:pl-5 absolute opacity-40"><ShieldCheckIcon /></div>
            <h1 className="uppercase  font-bold">Secure Payment</h1>
            <p className="">Visa, Mastercard, Amex, Maestro</p>
        </article>
        <article className="bg-general bg-opacity-80 w-full text-center items-center text-sm py-3">
            <div className="w-[50px] lg:w-[60px] pl-2 lg:pl-5 absolute opacity-40"><TruckIcon /></div>
            <h1 className="uppercase  font-bold">Free Delivery</h1>
            <p className="">We deliver throughout Europe</p>
        </article>
        <article className="bg-general bg-opacity-90 w-full text-center items-center text-sm py-3">
            <div className="w-[50px] lg:w-[60px] pl-2 lg:pl-5 absolute opacity-40"><ClockIcon /></div>
            <h1 className="uppercase  font-bold">Shipping in 48 hours</h1>
            <p className="">The treatment is fast to your home</p>
        </article>
        <article className="bg-general  w-full text-center items-center text-sm py-3">
            <div className="w-[50px] lg:w-[60px] pl-2 lg:pl-5 absolute opacity-40 "><SupportIcon /></div>
            <h1 className="uppercase  font-bold">24/7 Client Support</h1>
            <p className="">Our team will gladly help you anytime</p>
        </article>
    </section>
    
    );
  }
  export default Garanties;
  