import ProductPageContent from "../../components/ProductPageContent"
import { getAllProducts, getProduct, recursiveCatalog } from "../../lib/shopify"
import Head from 'next/head'
import { site_nom, site_adresse } from '../../lib/config';

export default function ProductPage ({ product, }) {
  return (
   <><Head>
        <title>{site_nom} - {product.title}</title></Head>

    <div className="min-h-screen ">

      <ProductPageContent product={product} />
    </div></> 
  )
}

export async function getStaticPaths() {
  const products = await recursiveCatalog()

  const paths = products.map(item => {
    const product = String(item.node.handle)

    return {
      params: { product }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product)

  return {
    props: {
      product
    }
  }
}
