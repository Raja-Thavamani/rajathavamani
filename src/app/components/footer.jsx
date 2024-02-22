
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <div className="foo_left_content">
                    <p>Copyright © 2024. All rights reserved.</p>
                   <p>Developed By: Raja Thavamani</p>
                </div>
                
                <div className="foo_social_links">
                    <a href="https://api.whatsapp.com/send?phone=919655005530&text=Hi%20Raja%20Thavamani,%20I%20am%20interested!%20in%20your%20portfolio%20app,%20and%20I%20want%20to%20learn%20more%20about%20you.!" target='_blank'>
                        <i className="bi bi-whatsapp"></i>
                    </a>
                    <a href="https://www.instagram.com/rajathavamanii" target='_blank'>
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://in.linkedin.com/in/rajathavamani-tech">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/Raja-Thavamani" target='_blank'>
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://codepen.io/rajathavamani">
                        <i className="bi bi-code-square"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;