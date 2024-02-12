
import { usePathname } from "next/navigation";

const Sidebar = ({ open, onClose }) => {
    const pathname = usePathname();
  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <div className="close" onClick={onClose}>
        <img src="/assets/images/close-white.svg" alt="close icon" />
      </div>
      <ul>
        <li className="nav_links"><a href="/" className={ pathname === "/" ? "active" : ""} >Home</a></li>
        <li className="nav_links"><a href="/about" className={pathname == "/about" ? "active" : ""} >About</a></li>
              <li className="nav_links"><a href="/experience" className={pathname == "/experience" ? "active" : ""} >Experience</a></li>
              <li className="nav_links"><a href="/tech-stacks" className={pathname == "/tech-stacks" ? "active" : ""} >Tech Stacks</a></li>
              <li className="nav_links"><a href="/curriculum-vitae" className={pathname == "/curriculum-vitae" ? "active" : ""} >Curriculum Vitae</a></li>
              <li className="nav_links"><a href="/contact" className={pathname == "/contact" ? "active" : "" } >Contact</a></li>
              <li className="nav_links"><a href="/enquiry" type='button' className={pathname == "/enquiry" ? "active" : "" } >Enquiry</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
