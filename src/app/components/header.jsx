
'use client'
import React from 'react';
import { usePathname } from "next/navigation";


const Header = () => {

    const pathname = usePathname();

    return (
        <nav class="navbar">
            <div class="logo">
                <h4>Raja <span>Thavamani</span></h4>
            </div>

            <div class="nav_ul">
                <a href="/" className={ pathname === "/" ? "active" : ""} >Home</a>
                <a href="/about" className={pathname == "/about" ? "active" : ""} >About</a>
                <a href="/experience" className={pathname == "/experience" ? "active" : ""} >Experience</a>
                <a href="/tech-stacks" className={pathname == "/tech-stacks" ? "active" : ""} >Tech Stacks</a>
                <a href="/curriculum-vitae" className={pathname == "/curriculum-vitae" ? "active" : ""} >Curriculum Vitae</a>
                <a href="/contact" className={pathname == "/contact" ? "active" : "" } >Contact</a>
            </div>

            

            <div class="quick_contact">
                
                 <a href="/enquiry" type='button' className={pathname == "/enquiry" ? "active" : "" } >Enquiry</a>
                
            </div>
        </nav>
    )
}

export default Header;