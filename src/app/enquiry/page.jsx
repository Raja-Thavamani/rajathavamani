import React from "react";
import Image from 'next/image';
import ConfettiComponent from '../components/Confetti';

export const metadata = {
  title: 'Enquiry | Raja Thavamani',
  description: 'I&apos;m a front-end developer with a passion for creating engaging and responsive Web experiences. Let&apos;s work together on your next app for a smooth user experience!',
  openGraph: {
    title: 'Enquiry | Portfolio',
    description: 'I&apos;m a front-end developer with a passion for creating engaging and responsive Web experiences. Let&apos;s work together on your next app for a smooth user experience!',
    url: 'https://rajathavamani.vercel.app/enquiry',
    siteName: 'Portfolio',
    images: [
      {
        url: 'https://rajathavamani.vercel.app/assets/images/og/rajathavamani-portfolio-enquiry.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}


const Enquiry = () => {
    
    return (
      <main>
        <ConfettiComponent />
            <section className="enquiry_section">
                <div className="enquiry_container">
                    <div className="enquiry_img_sec">
                        <Image src="/assets/images/enquiry.svg" width={0} height={0} quality={80} alt="" />
                    </div>
                    <div className="enquiry_form_container">
                        <h1><i className="bi bi-heart-arrow title_icon"></i>I would love to hear from you!<i className="bi bi-heart-arrow title_icon right"></i></h1>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeE0fa0fMoakWUIoFNz8ej-A-Kmcrm4IEZvU--laUL9GKXCcA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                </div>  
            </section>
        </main>
    );
}


export default Enquiry;