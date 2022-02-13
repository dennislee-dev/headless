import { getProductsInCollection } from "../lib/shopify";
import Hero from "../components/home/Hero";
import Accroche from "../components/general/accroche";
import Avantages from "../components/general/avantages";
import Imtadvr from "../components/home/imagetexteadvright";
import Itv from "../components/home/imagetextevaleur";
import Infos from "../components/general/infos";
import Head from "next/head";

import {
  site_nom,
  hero_titre,
  hero_soustitre,
  hero_lienimage,
  hero_bouton,
  accroche_titre,
  accroche_texte,
  it1_titre,
  it1_soustitre,
  it1_texte,
  it1_av1,
  it1_av2,
  it1_av3,
  it1_av4,
  it1_av5,
  it1_av6,
  it1_bouton,
  it1_lienimage,
  avantages_1,
  avantages_2,
  avantages_3,
  avantages_4,
  itv_titre,
  itv_texte1,
  itv_texte2,
  itv_texte3,
  itv_multi1,
  itv_multi2,
  itv_multitre1,
  itv_multitre2,
  itv_multitexte1,
  itv_multitexte2,
  itv_texteimage,
  itv_lienimage,
  itv_bouton,
  it2_titre,
  it2_soustitre,
  it2_texte,
  it2_av1,
  it2_av2,
  it2_av3,
  it2_av4,
  it2_av5,
  it2_av6,
  it2_bouton,
  it2_lienimage,
 
} from "../lib/config";

export default function Home({ products }) {
  return (
    <div className="">
       <Head><title>{site_nom} - Track my order</title></Head>
      <Hero
        titre={hero_titre}
        soustitre={hero_soustitre}
        lien={hero_lienimage}
        bouton={hero_bouton}
      />

      <Accroche titre={accroche_titre} phrase={accroche_texte} />

      <Imtadvr
        titre={it1_titre}
        soustitre={it1_soustitre}
        texte={it1_texte}
        a1={it1_av1}
        a2={it1_av2}
        a3={it1_av3}
        a4={it1_av4}
        a5={it1_av5}
        a6={it1_av6}
        lien={it1_lienimage}
        bouton={it1_bouton}
      />

      <Avantages
        av1={avantages_1}
        av2={avantages_2}
        av3={avantages_3}
        av4={avantages_4}
      />

      <Itv
        titre={itv_titre}
        texte1={itv_texte1}
        texte2={itv_texte2}
        texte3={itv_texte3}
        multi1={itv_multi1}
        multi2={itv_multi2}
        multitre1={itv_multitre1}
        multitre2={itv_multitre2}
        multitexte1={itv_multitexte1}
        multitexte2={itv_multitexte2}
        texteimage={itv_texteimage}
        lien={itv_lienimage}
      />

      <Imtadvr
        titre={it2_titre}
        soustitre={it2_soustitre}
        texte={it2_texte}
        a1={it2_av1}
        a2={it2_av2}
        a3={it2_av3}
        a4={it2_av4}
        a5={it2_av5}
        a6={it2_av6}
        lien={it2_lienimage}
        bouton={it2_bouton}
      />
      <Infos />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
