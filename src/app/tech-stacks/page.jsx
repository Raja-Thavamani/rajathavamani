import React from 'react';
import Image from 'next/image';
import ConfettiComponent from '../components/Confetti';

export const metadata = {
  title: 'Tech Stacks - Raja Thavamani',
  description:
    'Delivering exceptional user experiences through HTML, CSS, JavaScript, Laravel, Angular, React, and Nextjs. Translating concepts into captivating interfaces.',
  openGraph: {
    title: 'Raja Thavamani - Tech Stacks | Portfolio',
    description:
      'Delivering exceptional user experiences through HTML, CSS, JavaScript, Laravel, Angular, React, and Nextjs. Translating concepts into captivating interfaces.',
    url: 'https://rajathavamani.vercel.app/tech-stacks',
    siteName: 'Portfolio',
    images: [
      {
        url: 'https://rajathavamani.vercel.app/assets/images/og/rajathavamani-portfolio-techstacks.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const Techstacks = () => {
  return (
    <main>
      <ConfettiComponent />
      <section className='techstack_section'>
        <div className='techstack_container'>
          <h1 className='title'>
            <i className='bi bi-heart-arrow title_icon'></i>Tech Stacks
            <i className='bi bi-heart-arrow title_icon right'></i>
          </h1>
          <div className='techstack_box_wrap'>
            <a href='https://www.w3schools.com/html/' target='_blank'>
              <Image
                src='/assets/images/techstacks/html.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='HTML'
              />
              <h5>HTML</h5>
            </a>
            <a href='https://www.w3schools.com/css/' target='_blank'>
              <Image
                src='/assets/images/techstacks/css.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='CSS'
              />
              <h5>CSS</h5>
            </a>
            <a href='https://sass-lang.com/' target='_blank'>
              <Image
                src='/assets/images/techstacks/scss.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='SCSS'
              />
              <h5>SCSS</h5>
            </a>
            <a href='https://jquery.com/' target='_blank'>
              <Image
                src='/assets/images/techstacks/jquery.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='JQuery'
              />
              <h5>JQuery</h5>
            </a>
            <a href='https://www.w3schools.com/js/' target='_blank'>
              <Image
                src='/assets/images/techstacks/javascript.svg'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='Javascript'
              />
              <h5>Javascript</h5>
            </a>
            <a href='https://react.dev/' target='_blank'>
              <Image
                src='/assets/images/techstacks/react.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='React Js'
              />
              <h5>React Js</h5>
            </a>
            <a href='https://nextjs.org/' target='_blank'>
              <Image
                src='/assets/images/techstacks/nextjs.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='Next Js'
              />
              <h5>Next Js</h5>
            </a>
            <a href='https://laravel.com/' target='_blank'>
              <Image
                src='/assets/images/techstacks/laravel.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='Laravel'
              />
              <h5>Laravel</h5>
            </a>
            <a href='https://www.mysql.com/' target='_blank'>
              <Image
                src='/assets/images/techstacks/mysql.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='MySql'
              />
              <h5>MySql</h5>
            </a>
            <a href='https://getbootstrap.com/' target='_blank'>
              <Image
                src='/assets/images/techstacks/bootstrap.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='Boostrap'
              />
              <h5>Boostrap</h5>
            </a>
            <a href='https://chakra-ui.com/' target='_blank'>
              <Image
                src='/assets/images/techstacks/chakra-ui.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='Chakra UI'
              />
              <h5>Chakra UI</h5>
            </a>
            <a href='https://tailwindcss.com/' target='_blank'>
              <Image
                src='/assets/images/techstacks/tailwind.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='Tailwind CSS'
              />
              <h5>Tailwind CSS</h5>
            </a>
            <a href='https://github.com/' target='_blank'>
              <Image
                src='/assets/images/techstacks/github.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='Github'
              />
              <h5>Github</h5>
            </a>

            <a href='https://www.figma.com/' target='_blank'>
              <Image
                src='/assets/images/techstacks/figma.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='Figma'
              />
              <h5>Figma</h5>
            </a>
            <a href='https://bitbucket.org/' target='_blank'>
              <Image
                src='/assets/images/techstacks/bitbucket.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='Bitbucket'
              />
              <h5>Bitbucket</h5>
            </a>
            <a href='https://code.visualstudio.com/' target='_blank'>
              <Image
                src='/assets/images/techstacks/vscode.png'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='VS Code'
              />
              <h5>VS Code</h5>
            </a>
            <a href='https://gsap.com/docs' target='_blank'>
              <Image
                src='/assets/images/techstacks/greensock.webp'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt=''
              />
              <h5>GSAP</h5>
            </a>
            <a
              href='https://developers.google.com/search/docs/fundamentals/seo-starter-guide'
              target='_blank'
            >
              <Image
                src='/assets/images/techstacks/seo.svg'
                width={0}
                height={0}
                sizes={'100vw'}
                quality={80}
                alt='SEO'
              />
              <h5>SEO</h5>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Techstacks;
