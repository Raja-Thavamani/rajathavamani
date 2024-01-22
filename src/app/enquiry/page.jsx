import React from "react";



export const metadata = {
  title: 'Enquiry | Portfolio',
  description: 'Frontend Developer | UI Developer | Website Designer | Html Developer',
  openGraph: {
    title: 'Enquiry | Portfolio',
    description: 'Senior Fronend Developer Portfolio',
    url: 'http://localhost:3000/enquiry',
    siteName: 'Portfolio',
    images: [
      {
        url: 'http://localhost:3000/enquiry/enquiry-og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'http://localhost:3000/enquiry/enquiry-og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
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
                        <Image src="/assets/images/enquiry.svg" width={100} height={100} alt="" />
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