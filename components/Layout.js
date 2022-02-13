import React from 'react'
import Footer from './general/Footer'
import Nav from './general/Nav'
import Announcement from "./general/announcement";
import Garanties from "./general/garanties";
import Head from 'next/head'
import { site_nom, site_adresse } from '../lib/config';

export default function Layout({ children }) {
  return (
    < >
<Head>
        <title>HeyBreal</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content=""
        />
        <meta property="og:title" content={site_nom} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site_adresse} />
        <meta
          property="og:image"
          content="https://www.buildnextshop.com/share.png"
        />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={site_nom} />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>

<link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>
        
      </Head>
 
    <div className="font-poppins flex flex-col justify-between min-h-screen">
      <Announcement/>
      <Nav />

      <main>
        {children}
      </main>
      <Garanties/>
      <Footer />
    </div></>
  )
}
