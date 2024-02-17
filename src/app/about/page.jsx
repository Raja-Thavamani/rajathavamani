import React from "react";
import Image from 'next/image';
import ConfettiComponent from '../components/Confetti';


export const metadata = {
  title: 'About | Raja Thavamani - Senior Frontend Developer Portfolio',
  description: 'Raja Thavamani is a skilled front-end developer who is passionate about creating responsive web apps and turning ideas into interactive and user-friendly apps.',
  keywords: 'Frontend Developer | UI Developer | Website Designer | Html Developer',
  openGraph: {
    title: 'About | Raja Thavamani - Senior Frontend Developer Portfolio',
    description: 'Raja Thavamani is a skilled front-end developer who is passionate about creating responsive web apps and turning ideas into interactive and user-friendly apps.',
    url: 'https://rajathavamani.vercel.app/about',
    siteName: 'About | Raja Thavamani - Senior Frontend Developer Portfolio',
    images: [
      {
        url: 'https://rajathavamani.vercel.app/assets/images/rajathavamani.jpg',
        width: 256,
        height: 256,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
}


const About = () => {
    
return (
  <main>
    <ConfettiComponent />
        <section className="about_section">
            <div className="about_container">
                <div className="about_img_wrap">
                    <i className="bi bi-heart-fill shape_a"></i>
                    <i className="bi bi-stars shape_b"></i>
                    <i className="bi bi-circle-fill shape_c"></i>
                    <i className="bi bi-triangle-fill shape_d"></i>
                    <Image src="/assets/images/about.svg" width={100} height={100} style={{ width: '100%', height: '100%' }} sizes={"100vw"} quality={80} alt="rajathavamani" />
                </div>
                <div className="about_cnt_wrap">
                    <h1 className="about_title"><i class="bi bi-heart-arrow title_icon"></i>Get to know about me!<i class="bi bi-heart-arrow title_icon right"></i></h1>
                    <div className="about_content_block">
                        <h5>Bringing Ideas to Life through Code</h5>
                        <p>Hello there! I&apos;m Raja Thavamani, a passionate frontend developer with a keen eye for design and a love for transforming ideas into interactive and visually stunning digital experiences.</p>
                    </div>
                    <div className="about_content_block">
                        <h5>Who Am I?</h5>
                        <p>I&apos;m not just a coder; I&apos;m a storyteller in pixels and lines of code. From a young age, I&apos;ve been fascinated by the intersection of technology and creativity. What started as a hobby turned into a lifelong pursuit of mastering the art of frontend development.</p>
                    </div>
                    <div className="about_content_block">
                        <h5>What I Do</h5>
                        <p>In the vast world of web development, I specialize in crafting seamless and user-friendly interfaces. My toolbox includes HTML, CSS, and JavaScript, and I&apos;m always on the lookout for the latest frontend frameworks and tools to elevate my projects.</p>
                    </div>
                    <div className="about_content_block">
                        <h5>My Approach</h5>
                        <p>Every project is a unique canvas for me. I approach each challenge with a mix of analytical thinking and creative flair. I believe in the power of collaboration, working closely with designers and stakeholders to ensure that the final product not only meets but exceeds expectations.</p>
                    </div>
                    <div className="about_content_block last_item">
                        <h5>Why Work With Me?</h5>
                        <p>Pixel Perfection: I have a meticulous attention to detail, ensuring that every pixel aligns with the overall design vision.</p>
                        <p>Responsive Design: In a world dominated by various devices, I specialize in creating websites that adapt and thrive on any screen size.</p>
                        <p>Continuous Learning: The tech landscape evolves rapidly, and I make it a priority to stay ahead of the curve, always ready to integrate the latest technologies into my work.
                        </p>
          </div>
                   
                </div>
            </div>
        </section>
      </main>
    )
}
export default About;