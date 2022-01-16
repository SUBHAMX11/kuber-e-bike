import React, {useState} from "react";
import {Link} from "react-scroll";
import logo from "../images/logo.png";

function Navbar() {

    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }

        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);


    return(
        <nav className={nav ? "nav active" : "nav"}>
           <Link to='main' className="logo"  smooth= {true} duration={1500}>
               <img src={logo} alt=''/>
           </Link>  
           <input className="menu-btn" type='checkbox' id="menu-btn" />
           <label className= "menu-icon" for="menu-btn">
               <span className="nav-icon"></span>
           </label>

           <ul className="menu">
               <li><Link to='features' smooth= {true} duration={1000}>Features</Link></li>
               <li><Link to='about' smooth= {true} duration={1000} >About</Link></li>
               <li><Link to='models' smooth= {true} duration={1000}>Model</Link></li>
               <li><Link to='contact' smooth= {true} duration={1000}>contact</Link></li>
           </ul>
        </nav>
    )
}

export default Navbar;