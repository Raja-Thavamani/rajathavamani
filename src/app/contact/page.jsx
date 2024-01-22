import React from "react";
import Image from 'next/image';


export const metadata = {
  title: 'Contact | Portfolio',
  description: 'Frontend Developer | UI Developer | Website Designer | Html Developer',
  openGraph: {
    title: 'Contact | Portfolio',
    description: 'Senior Fronend Developer Portfolio',
    url: 'http://localhost:3000/contact',
    siteName: 'Portfolio',
    images: [
      {
        url: 'http://localhost:3000/contact/contact-og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'http://localhost:3000/contact/contact-og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}


const Contact = () => {
    
    return (
        <main>
            <section className="contact_section">
                <div className="contact_container">
                    <div className="contact_content_sec">
              
                          <h1>Contact</h1>
              
                          <a href="tel:9655005530" target="_blank" className="contact_items">
                            <p><i class="bi bi-telephone"></i>Mobile</p>
                            <h6>9655005530</h6>
                          </a>
                      
                          <a href="mailto:rajathavamani.tech@gmail.com" target="_blank" className="contact_items">
                            <p><i class="bi bi-envelope"></i>Email</p>
                            <h6>rajathavamani.tech@gmail.com</h6>
                          </a>

                          <a href="https://wa.me/9655005530?text=Hello" target="_blank" className="contact_items">
                            <p><i class="bi bi-whatsapp"></i>Whatsapp</p>
                            <h6>https://wa.me/9655005530?text=Hello</h6>
                          </a>
              
                          <a href="https://in.linkedin.com/in/rajathavamani-tech" target="_blank" className="contact_items">
                            <p><i class="bi bi-linkedin"></i>LinkedIn</p>
                            <h6>https://in.linkedin.com/in/rajathavamani-tech</h6>
                          </a>
              
                          <a href="https://github.com/Raja-Thavamani" target="_blank" className="contact_items">
                            <p><i class="bi bi-github"></i>Github</p>
                            <h6>https://github.com/Raja-Thavamani</h6>
                          </a>
              
                    </div>
                    <div className="contact_img_sec">
                      <Image src="/assets/images/contact.svg" width="100%" height="100%" layout="responsive" objectFit="cover" alt="contact" />
                    </div>
                </div>
            </section>
        </main>
    );
}


export default Contact