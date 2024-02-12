
import Image from 'next/image';

export const metadata = {
  title: 'Home | Raja Thavamani - Senior Frontend Developer Portfolio',
  description: 'Home: Hey! I am Raja Thavamani, a senior front-end developer, UI developer, and UI engineer with 7+ years of hands-on experience in front-end development.',
  keywords: 'Frontend Developer, UI Developer, Website Designer, UI Engineer, Html Developer Frontend Developer Portfolio Website, NextJs Portfolio, React Js Portfolio, Raja Thavamani LinkedIn, Raja Thavamani Facebook, Raja Thavamani Instagram, Raja Thavamani Twitter,',
  openGraph: { 
    title: 'Home | Raja Thavamani - Senior Frontend Developer Portfolio',
    description: 'Home: Hey! I am Raja Thavamani, a senior front-end developer, UI developer, and UI engineer with 7+ years of hands-on experience in front-end development.',
    url: 'https://rajathavamani.vercel.app/',
    siteName: 'Home | Raja Thavamani - Senior Frontend Developer Portfolio',
    images: [
      {
        url: 'https://rajathavamani.vercel.app/assets/images/rajathavamani.jpg',
        width: 256,
        height: 256,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
 
      <main>
        <section className="hero_section">
          <div className="hero_container">
            <div className="hero_content">
              <h1>Hi, I&apos;m Raja Thavamani</h1>
              <h2>I&apos;m Senior</h2>
              <div className="typing_animation">
                <span>F</span>
                <span>r</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>e</span>
                <span>n</span>
                <span>d</span>
                <span>-</span>
                <span>D</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
              </div>
              <p>I&apos;m a senior frontend developer. I can provide clean code and pixel perfect design.</p>
              <div className="hero_btns">
                <a href="/about" type="button" className="explore_btn">Explore <i className="bi bi-arrow-right"></i></a>
                <a href="/assets/pdf/rajathavamani-front-end-developer-cv.pdf" target='_blank' download="rajathavamani-front-end-developer-cv.pdf" type="button" className="download_btn">Download CV<i className="bi bi-download"></i></a>
              </div>
              <div className="social_link_wrap">
                <span>Follow me on :</span>
                <div className="social_links">
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-twitter-x"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="hero_img">
              <i className="bi bi-gem shape_a"></i>
              <i className="bi bi-star-fill shape_b"></i>
              <i className="bi bi-heart-fill shape_c"></i>
              <i className="bi bi-triangle-fill shape_d"></i>
              <Image src="/assets/images/rajathavamani.svg" width={100} height={100} style={{ width: '100%', height: 'auto' }} sizes={"100vw"} quality={80} alt="rajathavamani" />
            </div>
          </div>
        </section>
      </main>

  )
}
