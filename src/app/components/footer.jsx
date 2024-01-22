
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <div className="copy_content">
                    <p>Copyright © 2024. All rights reserved.</p>
                   
                </div>
                 <div className='dev_content'>
                        <p>Developed By: Raja Thavamani</p>
                </div>
                <div className="foo_social_links">
                    <a href="#">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="#">
                        <i class="bi bi-whatsapp"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;