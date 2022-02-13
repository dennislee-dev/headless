import { CheckCircleIcon, HomeIcon } from "@heroicons/react/solid";

function Avantages({av1, av2, av3, av4}) {
    return (
        <section className="bg-general bg-opacity-5 py-5 ">
	<div className="w-3/5 m-auto flex justify-between flex-wrap" >
		<article className="h-full">
			<CheckCircleIcon  className="m-auto w-6 text-general" />
			<h1 className="uppercase font-semibold">{av1}</h1>
		</article>
		<article className="h-full">
			<CheckCircleIcon className="m-auto w-6 text-general" />
			<h1 className="uppercase font-semibold">{av2}</h1>
		</article>
		<article className="h-full">
			<CheckCircleIcon  className="m-auto w-6 text-general" />
			<h1 className="uppercase font-semibold">{av3}</h1>
		</article>
		<article className="h-full">
			<CheckCircleIcon  className="m-auto w-6 text-general" />
			<h1 className="uppercase font-semibold">{av4}</h1>
		</article>
	</div>
</section>

    );
  }
  export default Avantages;
  