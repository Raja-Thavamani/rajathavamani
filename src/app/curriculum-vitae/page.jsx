import React from "react";



export const metadata = {
  title: 'Curriculum Vitae | Portfolio',
  description: 'Frontend Developer | UI Developer | Website Designer | Html Developer',
  openGraph: {
    title: 'Curriculum Vitae | Portfolio',
    description: 'Raja Thavamani - I am a Senior Fronend Developer with 7+ years experience using HTML, CSS, JQuery, and Javascript.',
    url: 'https://rajathavamani.vercel.app/curriculum-vitae',
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
        alt: 'Raja Thavamani Senior - Frontend Developer',
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