import React from "react";
import ConfettiComponent from '../components/Confetti';


export const metadata = {
  title: 'Curriculum Vitae | Raja Thavamani',
  description: 'I am a UI developer who specializes in creating responsive and dynamic web apps. I have experience in HTML, CSS, JQuery, JavaScript, Laravel, React, and NextJs.',
  openGraph: {
    title: 'Curriculum Vitae | Portfolio',
    description: 'I am a UI developer who specializes in creating responsive and dynamic web apps. I have experience in HTML, CSS, JQuery, JavaScript, Laravel, React, and NextJs.',
    url: 'https://rajathavamani.vercel.app/curriculum-vitae',
    siteName: 'Portfolio',
    images: [
      {
        url: 'https://rajathavamani.vercel.app/assets/images/rajathavamani.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}


const CurriculumVitae = () => {
    
    return (
      <main>
        <ConfettiComponent />
            <section className="curriculumvitae_section">
                <div className="curriculumvitae_container">
                    <embed src="/assets/pdf/rajathavamani-front-end-developer-cv.pdf" type="application/pdf" width="100%" height="100%" />
                </div>  
            </section>
        </main>
    );
}


export default CurriculumVitae;