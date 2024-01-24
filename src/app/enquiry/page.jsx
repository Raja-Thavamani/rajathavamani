import React from "react";
import Image from 'next/image';


export const metadata = {
  title: 'Enquiry | Portfolio',
  description: 'Frontend Developer | UI Developer | Website Designer | Html Developer',
  openGraph: {
    title: 'Enquiry | Portfolio',
    description: 'Raja Thavamani - I am a Senior Fronend Developer with 7+ years experience using HTML, CSS, JQuery, and Javascript.',
    url: 'https://rajathavamani.vercel.app/enquiry',
    siteName: 'Portfolio',
    images: [
      {
        url: 'https://rajathavamani.vercel.app/assets/images/rajathavamani.svg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://rajathavamani.vercel.app/assets/images/rajathavamani.svg',
        width: 1800,
        height: 1600,
        alt: 'Raja Thavamani - Senior Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}


const Enquiry = () => {
    
    return (
        <main>
            <section className="enquiry_section">
                <div className="enquiry_container">
                    <div className="enquiry_img_sec">
                        <Image src="/assets/images/enquiry.svg" width={100} height={100} style={{ width: '100%', height: 'auto' }} sizes={"100vw"} quality={80} alt="" />
                    </div>
                    <div className="enquiry_form_container">
                        <h1>Enquiry</h1>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeE0fa0fMoakWUIoFNz8ej-A-Kmcrm4IEZvU--laUL9GKXCcA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                </div>  
            </section>
        </main>
    );
}


export default Enquiry;