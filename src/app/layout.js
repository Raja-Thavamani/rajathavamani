
import Head from 'next/head';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../public/assets/css/index.css';

import Header from './components/header';
import Footer from './components/footer';

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
