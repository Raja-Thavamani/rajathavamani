import React from "react";



export const metadata = {
  title: 'Curriculum Vitae | Portfolio',
  description: 'Frontend Developer | UI Developer | Website Designer | Html Developer',
  openGraph: {
    title: 'Curriculum Vitae | Portfolio',
    description: 'Senior Fronend Developer Portfolio',
    url: 'http://localhost:3000/curriculum-vitae',
    siteName: 'Portfolio',
    images: [
      {
        url: 'http://localhost:3000/curriculum-vitae/enquiry-og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'http://localhost:3000/curriculum-vitae/enquiry-og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}


const CurriculumVitae = () => {
    
    return (
        <main>
            <section className="curriculumvitae_section">
                <div className="curriculumvitae_container">
                    <embed src="/assets/pdf/rajathavamani-front-end-developer-cv.pdf" type="application/pdf" width="100%" height="100%" />
                </div>  
            </section>
        </main>
    );
}


export default CurriculumVitae;