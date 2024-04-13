import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from "../assets/logo1.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        {/* Logo */}
        <div>
            <img src={Logo} alt="Andrew Perkins Logo" className="logo" />
        </div>

        {/* Menu */}
        <div>
            <ul className="flex">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Hamburger */}
        <div className="hidden">
            <FaBars />
        </div>

        {/* Mobile Menu */}
        <div className="hidden">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Social Icons */}
        <div className="hidden">
        </div>
    </div>
  )
}

export default Navbar;