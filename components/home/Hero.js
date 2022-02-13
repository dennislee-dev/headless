import Link from 'next/link'
import Image from 'next/image'

export default function Hero({titre, soustitre, lien, bouton}) {
  return (
    <section   className="fill-current relative  text-white bg-cover bg-top bg-no-repeat">
		<div className="">
		 <img
		className=" z-0  absolute object-cover h-full w-full object-top"
		
        alt="Mountains"
        src={lien}
      />
	  </div>
	<div className=" w-4/5 m-auto lg:py-[100px] py-[50px] z-1 relative">
		<div className="lg:w-[500px] space-y-4">
			<h1 className="font-bold text-4xl">{titre}</h1>
			<p className="text-lg">
				{soustitre}
			</p>
			<button className="bg-black p-2 text-white text-lg font-semibold">{bouton}</button>
		</div>
	</div>
</section>

  )
}
