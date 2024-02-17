"use client";
import Head from 'next/head';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../public/assets/css/index.css';
import Header from './components/header';
import Footer from './components/footer';
import dynamic from 'next/dynamic';
import '@fontsource/poppins';
import '@fontsource/roboto-condensed';


const BallCursor = dynamic(() => import('./components/BallCursor'), { ssr: false });


export default function RootLayout({children }) {

  return (

    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
      </Head>
      <body>
        
        <Header />
        <BallCursor />
        {children}
        <Footer />
      </body>
    </html>
  )
}
