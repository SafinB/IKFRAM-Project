import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Main.css";

import Logo from '../assets/images/Logo3.png';
import {Link} from "react-router-dom";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="logo" style={{ width: '48px', height: '48px'}} />
            </Link>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="#exercises">Oefeningen</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;