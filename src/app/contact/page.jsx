import React from "react";
import Image from 'next/image';
import ConfettiComponent from '../components/Confetti';

export const metadata = {
  title: 'Contact | Raja Thavamani',
  description: 'A passionate front-end designer creating smooth digital experiences. Connect with me and bring your visions to life. Connect with me for creative web solutions.',
  openGraph: {
    title: 'Contact | Portfolio',
    description: 'A passionate front-end designer creating smooth digital experiences. Connect with me and bring your visions to life. Connect with me for creative web solutions.',
    url: 'https://rajathavamani.vercel.app/contact',
    siteName: 'Portfolio',
    images: [
      {
        url: 'https://rajathavamani.vercel.app/assets/images/og/rajathavamani-portfolio-contact.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}


const Contact = () => {

    return (
      <main>
        <ConfettiComponent />
        <section className="contact_section">
          <h1><i className="bi bi-heart-arrow title_icon"></i>Contacts<i className="bi bi-heart-arrow title_icon right"></i></h1>
          <div className="contact_container">
                    <div className="contact_content_sec">
                          <a href="tel:9655005530" target="_blank" className="contact_items">
                            <div className="contact_social_icons"><i className="bi bi-telephone"></i></div>
                            <div className="contact_social_text">
                              <h6 className="title">Mobile</h6>
                              <h6 className="scl_sub_text">9655005530</h6>
                            </div>
                          </a>
                      
                          <a href="mailto:rajathavamani.tech@gmail.com" target="_blank" className="contact_items">
                            <div className="contact_social_icons"><i className="bi bi-envelope"></i></div>
                            <div className="contact_social_text">
                              <h6 className="title">Email</h6>
                              <h6 className="scl_sub_text">rajathavamani.tech@gmail.com</h6>
                            </div>
                          </a>

                          <a href="https://api.whatsapp.com/send?phone=919655005530&text=Hi%20Raja%20Thavamani,%20I%20am%20interested!" target="_blank" className="contact_items">
                            <div className="contact_social_icons"><i className="bi bi-whatsapp"></i></div>
                            <div className="contact_social_text">
                                <h6 className="title">Whatsapp</h6>
                                <h6 className="scl_sub_text">https://wa.me/919655005530</h6>
                            </div>
                          </a>
              
                          <a href="https://www.instagram.com/rajathavamanii/" target="_blank" className="contact_items">
                            <div className="contact_social_icons"><i className="bi bi-instagram"></i></div>
                            <div className="contact_social_text">
                                <h6 className="title">Instagram</h6>
                                <h6 className="scl_sub_text">https://www.instagram.com/rajathavamanii/</h6>
                            </div>
                          </a>
              
                          <a href="https://in.linkedin.com/in/rajathavamani-tech" target="_blank" className="contact_items">
                            <div className="contact_social_icons"><i className="bi bi-linkedin"></i></div>
                            <div className="contact_social_text">
                              <h6 className="title">LinkedIn</h6>
                              <h6 className="scl_sub_text">https://in.linkedin.com/in/rajathavamani-tech</h6>
                            </div>
                          </a>
              
                          <a href="https://github.com/Raja-Thavamani" target="_blank" className="contact_items">
                            <div className="contact_social_icons"><i className="bi bi-github"></i></div>
                            <div className="contact_social_text">
                                <h6 className="title">Github</h6>
                                <h6 className="scl_sub_text">https://github.com/Raja-Thavamani</h6>
                            </div>
                          </a>
              
                          <a href="https://codepen.io/rajathavamani" target="_blank" className="contact_items">
                            <div className="contact_social_icons"><i className="bi bi-code-square"></i></div>
                            <div className="contact_social_text">
                                <h6 className="title">Codepen</h6>
                                <h6 className="scl_sub_text">https://codepen.io/rajathavamani</h6>
                            </div>
                          </a>
              
                    </div>
                    <div className="contact_img_sec">
                      <Image src="/assets/images/contact.svg" width={100} height={100} style={{ width: '100%', height: '100%' }} sizes={"100vw"} quality={80}  alt="contact" />
                    </div>
                </div>
            </section>
        </main>
    );
}


export default Contact