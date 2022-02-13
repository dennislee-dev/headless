import { HomeIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Head from 'next/head'
import { site_nom, site_adresse } from '../../lib/config';

function Legalnotice() {
    return (
       <> 
       <Head>
        <title>{site_nom}- Legal Notice</title></Head>
       <header className="bg-general top-10 py-5 z-2 pb-10 lg:pb-5">
	<article className="relative z-0 w-4/5 m-auto ">
		<span
			className="lg:text-[120px] text-6xl font-bold  text-neutral-200  absolute z-[-1] opacity-10  left-[-30px]"
		>
    Legal Notice.
		</span>
		<h2 className="text-white font-bold text-6xl lg:pt-10 pt-5 lg:pl-12">Legal Notice.</h2>
		<p className="text-white text-xl pt-3 lg:pl-12" />
	</article>
</header>

<section className="bg-neutral-100 py-1 ">
	<article className="flex items-center m-auto w-3/5 space-x-2">
		<div>
			
				<Link href="/" passHref><HomeIcon  className=" w-4 text-black hover:text-[#72839f] cursor-pointer" /></Link>
		</div>
		<div>
			<ChevronRightIcon className=" w-4 text-black" />
		</div>
		<h1 className="text-sm font-[500]">Legal Notice</h1>
	</article>
</section>

<div className="py-10">
    <div className="w-11/12 lg:w-5/12 m-auto ">
      <div className="space-y-4">
        <h1 className="font-bold">Legal notice of the {site_nom} UK site</h1>

        <p>----</p>

        <p>
          The {site_nom} UK website is accessible via the url address
          {site_adresse}(hereinafter the &quot;Site&quot;).
          <br></br>
          <br></br>
          You can also contact the Site&quot;s editor by email at the following
          address: contact@heybreal.com
          <br></br>
          <br></br>
          The {site_nom} site is edited by :<br></br>
          <br></br>
          {site_nom} UK
          <br></br>
          <br></br>
          For any question(s) or problem(s) regarding your order, please
          contact us via the email address mentioned above, we will be happy
          to help you.
          <br></br>
          <br></br>
          Sincerely,
          <br></br>
          <br></br>
          The {site_nom} UK team.
          <br></br>
          <br></br>
          All rights reserved - {site_nom} UK
          <br></br>
          <br></br>
          If you have any questions regarding your return/refund, please
          read our return/refund policies.
        </p>
      </div>
    </div>
  </div>


       </>
    );
  }
  export default Legalnotice;
  