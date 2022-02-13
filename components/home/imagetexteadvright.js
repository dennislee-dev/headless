import { CheckCircleIcon, HomeIcon } from "@heroicons/react/solid";
import Image from 'next/image'

function ITADVR({titre, soustitre, texte, a1, a2, a3, a4, a5, a6, lien, bouton}) {
  return (
    
<section className="lg:flex lg:w-4/5 w-4/5 m-auto lg:py-20 py-10 mt-10 lg:space-x-[300px] lg:space-y-0 space-y-10 lg:pt-40">
	<article className="relative lg:w-[1000px] w-[300px]">
  <img
        alt="Mountains"
        src={lien}
        width="400px"
        height="400px"
        quality={100}
      />
		<span className="bg-general opacity-40 absolute lg:right-[-60px] right-[-20px] lg:top-[-60px] top-[-20px] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] z-[-1]" />
	</article>
	<article className=" w-full space-y-8 lg:top-[-60px] relative">
		<h1 className="font-bold text-2xl lg:text-4xl">{titre}</h1>
		<h2 className=" text-general font-semibold">
			{soustitre}
		</h2>
		<p>
			{texte}
		</p>
		<div className="flex space-x-5">
			<article className="space-y-2">
				<div className="flex space-x-2 items-center">
					<span><CheckCircleIcon className=" w-6 text-general" /></span>
					<h2>{a1}</h2>
				</div>

				<div className="flex space-x-2 items-center">
					<span><CheckCircleIcon className=" w-6 text-general" /></span>
					<h2>{a2}</h2>
				</div>

				<div className="flex space-x-2 items-center">
					<span><CheckCircleIcon  className=" w-6 text-general" /></span>
					<h2>{a3}</h2>
				</div>
			</article>
			<article className="space-y-2">
				<div className="flex space-x-2 items-center">
					<span><CheckCircleIcon   className=" w-6 text-general" /></span>
					<h2>{a4}</h2>
				</div>
				<div className="flex space-x-2 items-center">
					<span><CheckCircleIcon  className=" w-6 text-general" /></span>
					<h2>{a5}</h2>
				</div>
				<div className="flex space-x-2 items-center">
					<span><CheckCircleIcon   className=" w-6 text-general" /></span>
					<h2>{a6}</h2>
				</div>
			</article>
		</div>

		<button className="bg-black p-2 px-4 text-white text-lg font-semibold lg:w-auto w-full">{bouton}</button>
	</article>
</section>
  );
}
export default ITADVR;
