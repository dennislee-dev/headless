import { CheckCircleIcon, MailIcon, ChatIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";

function Infos() {
  return (
    <>
      <header className=" top-10 py-5 z-2 pb-10 lg:pb-5 h-auto">
	<article className="relative z-0 w-4/5 m-auto ">
		<span className="lg:text-8xl text-6xl font-bold  text-[#F5F5F5]  absolute z-[-1]   left-[-30px]">
			Any questions?
		</span>
		<h2 className="text-black font-semibold lg:text-6xl text-5xl  pt-5 lg:pl-12">Any questions?</h2>
		<p className="text-black text-xl pt-3 lg:pl-12">Our answers.</p>
	</article>
</header>
	

<div className="lg:flex lg:space-x-32 lg:space-y-0 space-y-10 w-4/5 mx-auto py-5 ">
    <div className="h-full space-y-2">
        <span><ChatIcon className=" w-6 text-black" /></span>
        <h1 className="font-bold text-sm">LIVECHAT.</h1>
        <p className="text-sm">From Monday to Friday. From 9am to 7pm.
            We answer all your questions on our chat.</p>
    </div>
    <div className="h-full space-y-2">
        <span><QuestionMarkCircleIcon  className=" w-6 text-black" /></span>
        <h1 className="font-bold text-sm">FAQ.</h1>
        <p className="text-sm">Got a question? We surely have the answer in our Frequently Asked Questions..</p>
    </div>
    <div className="h-full space-y-2">
        <span><MailIcon className=" w-6 text-black" /></span>
        <h1 className="font-bold text-sm">EMAIL.</h1>
        <p className="text-sm">From Monday to Friday. From 9am to 7pm.</p>
    </div>
</div>


    </>
  );
}
export default Infos;
