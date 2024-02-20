"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../public/assets/css/index.css';
import Header from './components/header';
import Footer from './components/footer';
import dynamic from 'next/dynamic';
import '@fontsource/poppins';
import '@fontsource/roboto-condensed';
import PreLoader from './components/PreLoader';




export default function RootLayout({children }) {

  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
  });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timerHandle = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a delay, replace this with your actual data loading logic

    return () => clearTimeout(timerHandle);
  }, []);


  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <>
          {loading ? (
            <PreLoader />
          ) : (
            <>
              <AnimatedCursor
                innerSize={15}
                outerSize={50}
                color='255, 85, 85'
                outerAlpha={0.4}
                innerScale={0.7}
                outerScale={2}
              />
              <Header />
              {children}
              <Footer />
            </>
          )}
        </>
       
        
      </body>
    </html>
  );
}
