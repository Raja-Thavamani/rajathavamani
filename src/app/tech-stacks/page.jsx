
import React from "react";
import Image from 'next/image';
import ConfettiComponent from '../components/Confetti';

export const metadata = {

  title: 'Tech Stacks - Raja Thavamani',
  description: 'Delivering exceptional user experiences through HTML, CSS, JavaScript, Laravel, Angular, React, and Nextjs. Translating concepts into captivating interfaces.',
  openGraph: {
    title: 'Raja Thavamani - Tech Stacks | Portfolio',
    description: 'Delivering exceptional user experiences through HTML, CSS, JavaScript, Laravel, Angular, React, and Nextjs. Translating concepts into captivating interfaces.',
    url: 'https://rajathavamani.vercel.app/tech-stacks',
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


const Techstacks = () => {
    
    return (
        <main>
            <ConfettiComponent />
            <section className="techstack_section">

                <div className="techstack_container">
                    <h1 className="title"><i class="bi bi-heart-arrow title_icon"></i>Tech Stacks<i class="bi bi-heart-arrow title_icon right"></i></h1>
                    <ul>
                        <li>
                            <Image src="/assets/images/html.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="HTML" />
                            <h5>HTML</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/css.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="CSS" />
                            <h5>CSS</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/scss.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="SCSS" />
                            <h5>SCSS</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/jquery.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="JQuery" />
                            <h5>JQuery</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/javascript.svg" width={0} height={0}  sizes={"100vw"} quality={80} alt="Javascript" />
                            <h5>Javascript</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/react.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="React Js" />
                            <h5>React Js</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/nextjs.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="Next Js" />
                            <h5>Next Js</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/laravel.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="Laravel" />
                            <h5>Laravel</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/mysql.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="MySql" />
                            <h5>MySql</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/bootstrap.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="Boostrap" />
                            <h5>Boostrap</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/chakra-ui.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="Chakra UI" />
                                <h5>Chakra UI</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/tailwind.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="Tailwind CSS" />
                            <h5>Tailwind CSS</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/github.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="Github" />
                            <h5>Github</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/figma.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="Figma" />
                            <h5>Figma</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/bitbucket.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="Bitbucket" />
                            <h5>Bitbucket</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/vscode.png" width={0} height={0}  sizes={"100vw"} quality={80} alt="VS Code" />
                            <h5>VS Code</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/greensock.webp" width={0} height={0}  sizes={"100vw"} quality={80} alt="" />
                            <h5>GSAP</h5>
                        </li>
                        <li>
                            <Image src="/assets/images/seo.svg" width={0} height={0}  sizes={"100vw"} quality={80} alt="SEO" />
                            <h5>SEO</h5>
                        </li>
                    </ul>
                </div>  
            </section>
        </main>
    );

}

export default Techstacks;