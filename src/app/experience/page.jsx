import React from "react";
import Image from 'next/image';


export const metadata = {
  title: 'Experience | Portfolio',
  description: 'Frontend Developer | UI Developer | Website Designer | Html Developer',
  openGraph: {
    title: 'Experience | Portfolio',
    description: 'Senior Fronend Developer Portfolio',
    url: 'http://localhost:3000/experience',
    siteName: 'Portfolio',
    images: [
      {
        url: 'http://localhost:3000/experience/experience-og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'http://localhost:3000/experience/experience-og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}


const Experience = () => {
    
    return (
        <main>
            <section className="experience_section">
                <h1 className="page_title">Experience</h1>
                <div className="experience_container">
                    <div className="experience_divider">
                        <Image src="assets/images/company-logo.svg"
                            className="company_logo" alt="Swipewire Technologies" />
                        <h4 className="company_name">Swipewire Technologies</h4>
                        <p className="designation"><b>Designation :</b><span> Senior Frontend Developer</span></p>
                        <p className="exp_duration"><b>Period :</b> <span>April 2022 to Present</span></p>
                        <p className="job_location"><b>Job Location :</b> <span>Chennai</span></p>
                        <p className="job_desc_title"><b>Job Description :</b></p>
                             
                        <div>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>designing and implementing modern and responsive user interfaces for web applications.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Collaborated with UX designers to translate wireframes and prototypes into seamless user experiences.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Implemented and maintained front-end code standards and best practices to ensure consistency and scalability across projects.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Conducted code reviews and provided constructive feedback to team members, fostering a culture of continuous improvement.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Worked closely with back-end developers to integrate front-end components with server-side logic and databases.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Utilized HTML, CSS, JavaScript, Jquery, Bootstrap, Figma, Flexbox, Bitbucket, Github, and using Laravel frameworks to develop user interfaces that meet business requirements.</p>
                        </div>
                    </div>
                    <div className="experience_divider">
                        <Image src="assets/images/company-logo.svg"
                            className="company_logo" alt="Clarisco Solutions" />
                        <h4 className="company_name">Clarisco Solutions</h4>
                        <p className="designation"><b>Designation :</b><span> Senior Frontend Developer</span></p>
                        <p className="exp_duration"><b>Period :</b> <span>August 2022 to March 2022</span></p>
                        <p className="job_location"><b>Job Location :</b> <span>Madurai</span></p>
                            <p className="job_desc_title"><b>Job Description :</b></p>
                           
                            
                        <div>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>designing and implementing modern and responsive user interfaces for web applications.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Collaborated with UX designers to translate wireframes and prototypes into seamless user experiences.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Implemented and maintained front-end code standards and best practices to ensure consistency and scalability across projects.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Conducted code reviews and provided constructive feedback to team members, fostering a culture of continuous improvement.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Worked closely with back-end developers to integrate front-end components with server-side logic and databases.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Utilized HTML, CSS, JavaScript, Jquery, Bootstrap, Figma, Flexbox, Bitbucket, Github, and using Nodejs frameworks to develop user interfaces that meet business requirements.</p>
                        </div>
                    </div>
                    <div className="experience_divider">
                        <Image src="assets/images/company-logo.svg"
                            className="company_logo" alt="Story Digital" />
                        <h4 className="company_name">Story Digital</h4>
                        <p className="designation"><b>Designation :</b><span> Frontend Developer</span></p>
                        <p className="exp_duration"><b>Period :</b> <span>March 2018 to March 2019</span></p>
                        <p className="job_location"><b>Job Location :</b> <span>New Delhi</span></p>
                        <p className="job_desc_title"><b>Job Description :</b></p>
                          
                        <div>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>designing and implementing modern and responsive user interfaces for web applications.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Collaborated with UX designers to translate wireframes and prototypes into seamless user experiences.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Implemented and maintained front-end code standards and best practices to ensure consistency and scalability across projects.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Conducted code reviews and provided constructive feedback to team members, fostering a culture of continuous improvement.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Worked closely with back-end developers to integrate front-end components with server-side logic and databases.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Utilized HTML, CSS, JavaScript, Jquery, Bootstrap, Figma, Flexbox, Bitbucket, Github, and using React frameworks to develop user interfaces that meet business requirements.</p>
                        </div>
                    </div>
                    <div className="experience_divider">
                        <Image src="assets/images/company-logo.svg"
                            className="company_logo" alt="Winzone Softech" />
                        <h4 className="company_name">Winzone Softech</h4>
                        <p className="designation"><b>Designation :</b><span> Frontend Developer</span></p>
                        <p className="exp_duration"><b>Period :</b> <span>June 2015 to Feb 2018</span></p>
                        <p className="job_location"><b>Job Location :</b> <span>Karaikudi</span></p>
                            <p className="job_desc_title"><b>Job Description :</b></p>
                            
                        <div>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>designing and implementing modern and responsive user interfaces for web applications.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Collaborated with UX designers to translate wireframes and prototypes into seamless user experiences.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Implemented and maintained front-end code standards and best practices to ensure consistency and scalability across projects.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Conducted code reviews and provided constructive feedback to team members, fostering a culture of continuous improvement.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Worked closely with back-end developers to integrate front-end components with server-side logic and databases.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Utilized HTML, CSS, JavaScript, Jquery, Bootstrap, Figma, Flexbox, Bitbucket and Github to develop user interfaces that meet business requirements.</p>
                        </div>
                    </div>

                    <div className="experience_divider">
                        <Image src="assets/images/company-logo.svg"
                            className="company_logo" alt="PlayNlive" />
                        <h4 className="company_name">PlayNlive</h4>
                        <p className="designation"><b>Designation :</b><span> Frontend Developer</span></p>
                        <p className="exp_duration"><b>Period :</b> <span>Feb 2015 to May 2015</span></p>
                        <p className="job_location"><b>Job Location :</b> <span>Karaikudi</span></p>
                            <p className="job_desc_title"><b>Job Description :</b></p>
                            
                        <div>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>designing and implementing modern and responsive user interfaces for web applications.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Collaborated with UX designers to translate wireframes and prototypes into seamless user experiences.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Implemented and maintained front-end code standards and best practices to ensure consistency and scalability across projects.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Conducted code reviews and provided constructive feedback to team members, fostering a culture of continuous improvement.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Worked closely with back-end developers to integrate front-end components with server-side logic and databases.</p>
                            <p className="job_desc_list"><i class="bi bi-arrow-right"></i>Utilized HTML, CSS, JavaScript, Jquery, Bootstrap, PHP, Figma, Flexbox, Bitbucket and Github to develop user interfaces that meet business requirements.</p>
                        </div>
                    </div>
               
            </div>
        </section>
        </main>
    );
}

export default Experience;