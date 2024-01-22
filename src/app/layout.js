
import Head from 'next/head';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../public/assets/css/index.css';

import Header from './components/header';
import Footer from './components/footer';

export const metadata = {
  title: 'Home | Portfolio',
  description: 'Frontend Developer | UI Developer | Website Designer | Html Developer',
  openGraph: {
    title: 'Home | Portfolio',
    description: 'Senior Fronend Developer Portfolio',
    url: 'http://localhost:3000/',
    siteName: 'Portfolio',
    images: [
      {
        url: 'http://localhost:3000/home-og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'http://localhost:3000/home-og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <Head>
        <title>Home |Portfolio</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
