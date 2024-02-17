
'use client'
import React from 'react';
import { usePathname } from "next/navigation";
import { useState } from 'react';
import Sidebar from './Sidebar';

const Header = () => {

    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    };
    
    return (
        <>
             <nav className="navbar">
            <div className="logo">
                <div className='hamburger_menu' onClick={toggleSidebar}>
                    <img src="/assets/images/hamburger-menu-white.svg" alt="hamburger-menu.svg" />
                </div>
                <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
                <a href="/" className={ pathname === "/" ? "active" : ""}>Raja <span className='sub_logo_text'>Thavamani</span></a>
            </div>

            <div className="nav_ul">
                <a href="/" className={ pathname === "/" ? "active" : ""} >Home</a>
                <a href="/about" className={pathname == "/about" ? "active" : ""} >About</a>
                <a href="/experience" className={pathname == "/experience" ? "active" : ""} >Experience</a>
                <a href="/tech-stacks" className={pathname == "/tech-stacks" ? "active" : ""} >Tech Stacks</a>
                <a href="/curriculum-vitae" className={pathname == "/curriculum-vitae" ? "active" : ""} >Curriculum Vitae</a>
                <a href="/contact" className={pathname == "/contact" ? "active" : "" } >Contact</a>
            </div>

            

            <div className="quick_contact">
                
                 <a href="/enquiry" type='button' className={pathname == "/enquiry" ? "active" : "" } >Enquiry</a>
                
            </div>
        </nav>
       
        </>
       
    )
}

export default Header;