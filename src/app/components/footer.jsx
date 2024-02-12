
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
                    <a href="#">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;