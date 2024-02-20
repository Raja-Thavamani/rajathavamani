import React from "react";
import Image from 'next/image';
import ConfettiComponent from '../components/Confetti';

export const metadata = {
  title: 'Experience | Raja Thavamani',
  description: 'I am best at creating the best user experience through innovative front-end development. Improve your presence with the latest technology and responsive design.',
  openGraph: {
    title: 'Experience | Portfolio',
    description: 'I am best at creating the best user experience through innovative front-end development. Improve your presence with the latest technology and responsive design.',
    url: 'https://rajathavamani.vercel.app/portfolio',
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


const Experience = () => {
    
    return (
        <main>
            <ConfettiComponent />
            <section className="experience_section">
                <h1 className="page_title"><i className="bi bi-heart-arrow title_icon"></i>My Experience<i className="bi bi-heart-arrow title_icon right"></i></h1>
                <div className="experience_container">
                    <div className="experience_divider">
                        <div className="company_logo_wrap">
                            <Image src="/assets/images/companies/swipewire-logo.svg" className="company_logo" width={0} height={0} style={{ width: '50px', height: 'auto' }} sizes={"100vw"} quality={80} alt="Swipewire Technologies" />
                        </div>
                        
                        <h4 className="company_name">Swipewire Technologies<a href="https://theswipewire.com/" target="_blank"><i className="bi bi-heart-arrow"></i>Explore</a></h4>
                        <p className="designation"><b>Designation :</b><span> Senior Frontend Developer</span></p>
                        <p className="exp_duration"><b>Period :</b> <span>April 2022 to Present</span></p>
                        <p className="job_location"><b>Job Location :</b> <span>Chennai</span></p>
                        <p className="job_desc_title"><b>Job Description :</b></p>
                             
                        <div className="job_desc_list_wrap">
                            <p className="job_desc_list">designing and implementing modern and responsive user interfaces for web applications.</p>
                            <p className="job_desc_list">Collaborated with UX designers to translate wireframes and prototypes into seamless user experiences.</p>
                            <p className="job_desc_list">Implemented and maintained front-end code standards and best practices to ensure consistency and scalability across projects.</p>
                            <p className="job_desc_list">Conducted code reviews and provided constructive feedback to team members, fostering a culture of continuous improvement.</p>
                            <p className="job_desc_list">Worked closely with back-end developers to integrate front-end components with server-side logic and databases.</p>
                            <p className="job_desc_list">Utilized HTML, CSS, JavaScript, Jquery, Bootstrap, Figma, Flexbox, Bitbucket, Github, and using Laravel frameworks to develop user interfaces that meet business requirements.</p>
                        </div>
                    </div>
                    <div className="experience_divider">
                        <Image src="/assets/images/companies/clarisco-logo.png" className="company_logo" width={0} height={0} style={{ width: '50px', height: 'auto' }} sizes={"100vw"} quality={80} alt="Clarisco Solutions" />
                        <h4 className="company_name">Clarisco Solutions<a href="https://www.clarisco.com/" target="_blank"><i className="bi bi-heart-arrow"></i>Explore</a></h4>
                        <p className="designation"><b>Designation :</b><span> Senior Frontend Developer</span></p>
                        <p className="exp_duration"><b>Period :</b> <span>August 2022 to March 2022</span></p>
                        <p className="job_location"><b>Job Location :</b> <span>Madurai</span></p>
                            <p className="job_desc_title"><b>Job Description :</b></p>
                           
                            
                        <div className="job_desc_list_wrap">
                            <p className="job_desc_list">designing and implementing modern and responsive user interfaces for web applications.</p>
                            <p className="job_desc_list">Collaborated with UX designers to translate wireframes and prototypes into seamless user experiences.</p>
                            <p className="job_desc_list">Implemented and maintained front-end code standards and best practices to ensure consistency and scalability across projects.</p>
                            <p className="job_desc_list">Conducted code reviews and provided constructive feedback to team members, fostering a culture of continuous improvement.</p>
                            <p className="job_desc_list">Worked closely with back-end developers to integrate front-end components with server-side logic and databases.</p>
                            <p className="job_desc_list">Utilized HTML, CSS, JavaScript, Jquery, Bootstrap, Figma, Flexbox, Bitbucket, Github, and using Nodejs frameworks to develop user interfaces that meet business requirements.</p>
                        </div>
                    </div>
                    <div className="experience_divider">
                        <Image src="/assets/images/companies/story-digital-logo.png" className="company_logo" width={0} height={0} style={{ width: '50px', height: 'auto' }} sizes={"100vw"} quality={80} alt="Story Digital" />
                        <h4 className="company_name">Story Digital<a href="https://www.storydigital.in/" target="_blank"><i className="bi bi-heart-arrow"></i>Explore</a></h4>
                        <p className="designation"><b>Designation :</b><span> Frontend Developer</span></p>
                        <p className="exp_duration"><b>Period :</b> <span>March 2018 to March 2019</span></p>
                        <p className="job_location"><b>Job Location :</b> <span>New Delhi</span></p>
                        <p className="job_desc_title"><b>Job Description :</b></p>
                          
                        <div className="job_desc_list_wrap">
                            <p className="job_desc_list">designing and implementing modern and responsive user interfaces for web applications.</p>
                            <p className="job_desc_list">Collaborated with UX designers to translate wireframes and prototypes into seamless user experiences.</p>
                            <p className="job_desc_list">Implemented and maintained front-end code standards and best practices to ensure consistency and scalability across projects.</p>
                            <p className="job_desc_list">Conducted code reviews and provided constructive feedback to team members, fostering a culture of continuous improvement.</p>
                            <p className="job_desc_list">Worked closely with back-end developers to integrate front-end components with server-side logic and databases.</p>
                            <p className="job_desc_list">Utilized HTML, CSS, JavaScript, Jquery, Bootstrap, Figma, Flexbox, Bitbucket, Github, and using React frameworks to develop user interfaces that meet business requirements.</p>
                        </div>
                    </div>
                    <div className="experience_divider">
                        <Image src="/assets/images/companies/winzone-softech-logo.png" className="company_logo" width={0} height={0} style={{ width: '50px', height: 'auto' }} sizes={"100vw"} quality={80} alt="Winzone Softech" />
                        <h4 className="company_name">Winzone Softech<a href="https://winzonesoftech.com/" target="_blank"><i className="bi bi-heart-arrow"></i>Explore</a></h4>
                        <p className="designation"><b>Designation :</b><span> Frontend Developer</span></p>
                        <p className="exp_duration"><b>Period :</b> <span>June 2015 to Feb 2018</span></p>
                        <p className="job_location"><b>Job Location :</b> <span>Karaikudi</span></p>
                            <p className="job_desc_title"><b>Job Description :</b></p>
                            
                        <div className="job_desc_list_wrap">
                            <p className="job_desc_list">designing and implementing modern and responsive user interfaces for web applications.</p>
                            <p className="job_desc_list">Collaborated with UX designers to translate wireframes and prototypes into seamless user experiences.</p>
                            <p className="job_desc_list">Implemented and maintained front-end code standards and best practices to ensure consistency and scalability across projects.</p>
                            <p className="job_desc_list">Conducted code reviews and provided constructive feedback to team members, fostering a culture of continuous improvement.</p>
                            <p className="job_desc_list">Worked closely with back-end developers to integrate front-end components with server-side logic and databases.</p>
                            <p className="job_desc_list">Utilized HTML, CSS, JavaScript, Jquery, Bootstrap, Figma, Flexbox, Bitbucket and Github to develop user interfaces that meet business requirements.</p>
                        </div>
                    </div>

                    <div className="experience_divider">
                        <Image src="/assets/images/companies/playnlive.jpeg" className="company_logo" width={0} height={0} style={{ width: '50px', height: 'auto' }} sizes={"100vw"} quality={80} alt="PlayNlive" />
                        <h4 className="company_name">PlayNlive<a href="http://www.playnlivengo.org/" target="_blank"><i className="bi bi-heart-arrow"></i>Explore</a></h4>
                        <p className="designation"><b>Designation :</b><span> Frontend Developer</span></p>
                        <p className="exp_duration"><b>Period :</b> <span>Feb 2015 to May 2015</span></p>
                        <p className="job_location"><b>Job Location :</b> <span>Karaikudi</span></p>
                            <p className="job_desc_title"><b>Job Description :</b></p>
                            
                        <div className="job_desc_list_wrap">
                            <p className="job_desc_list">designing and implementing modern and responsive user interfaces for web applications.</p>
                            <p className="job_desc_list">Collaborated with UX designers to translate wireframes and prototypes into seamless user experiences.</p>
                            <p className="job_desc_list">Implemented and maintained front-end code standards and best practices to ensure consistency and scalability across projects.</p>
                            <p className="job_desc_list">Conducted code reviews and provided constructive feedback to team members, fostering a culture of continuous improvement.</p>
                            <p className="job_desc_list">Worked closely with back-end developers to integrate front-end components with server-side logic and databases.</p>
                            <p className="job_desc_list">Utilized HTML, CSS, JavaScript, Jquery, Bootstrap, PHP, Figma, Flexbox, Bitbucket and Github to develop user interfaces that meet business requirements.</p>
                        </div>
                    </div>
               
            </div>
        </section>
        </main>
    );
}

export default Experience;