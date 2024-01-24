
import Head from 'next/head';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../public/assets/css/index.css';

import Header from './components/header';
import Footer from './components/footer';


export const metadata = {
  title: 'Home | Raja Thavamani',
  description: 'Raja Thavamani Frontend Developer | Raja Thavamani UI Developer | Raja Thavamani Website Designer | Raja Thavamani Html Developer',
  keywords: ["Frontend Developer", "UI Developer", "Website Developer", "Html Developer, UI Engineer, User Interface Developer, Reactjs Developer, Nextjs Developer, Javascript Developer"],
  locale: 'en_US',
  type: 'Portfolio Website',

  openGraph: {
    title: 'Home | Raja Thavamani Portfolio',
    description: 'Raja Thavamani - I am a Senior Fronend Developer with 7+ years experience using HTML, CSS, JQuery, and Javascript.',
    url: 'https://rajathavamani.vercel.app',
    siteName: 'Raja Thavamani | Senior Fronend Developer Portfolio',
    images: [
      {
        alt: 'Raja Thavamani - Senior Frontend Developer | Portfolio',
        type: 'image/jpg',
        width: '600',
        height: '450',
        url: 'https://rajathavamani.vercel.app/assets/images/rajathavamani-senior-frontend-developer.jpg',
      }
    ],
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
