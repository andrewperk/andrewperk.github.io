import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from "../assets/logo1.png";
import {Link} from 'react-scroll';
import Resume from '../assets/files/andrewperkins-webdev-resume-2024.pdf';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        {/* Logo */}
        <div>
            <img src={Logo} alt="Andrew Perkins Logo" className="logo" />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex">
            <li>
                <Link 
                to="hero" 
                smooth={true} 
                duration={500} 
                >
                Home
                </Link>
            </li>
            <li>
                <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                >
                About
                </Link>
            </li>
            <li>
                <Link 
                to="skills" 
                smooth={true} 
                duration={500} 
                >
                Skills
                </Link>
            </li>
            <li>
                <Link 
                to="work" 
                smooth={true} 
                duration={500} 
                >
                Work
                </Link>
            </li>
            <li>
                <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                >
                Contact
                </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <ul>
                <li className="py-6 text-4xl">
                <Link 
                onClick={handleClick} 
                to="hero" 
                smooth={true} 
                duration={500} 
                >
                Home
                </Link>
                </li>
                <li className="py-6 text-4xl">
                <Link
                onClick={handleClick}  
                to="about" 
                smooth={true} 
                duration={500} 
                >
                About
                </Link>
                </li>
                <li className="py-6 text-4xl">
                <Link 
                onClick={handleClick} 
                to="skills" 
                smooth={true} 
                duration={500} 
                >
                Skills
                </Link>
                </li>
                <li className="py-6 text-4xl">
                <Link 
                onClick={handleClick} 
                to="work" 
                smooth={true} 
                duration={500} 
                >
                Work
                </Link>
                </li>
                <li className="py-6 text-4xl">
                <Link
                onClick={handleClick}  
                to="contact" 
                smooth={true} 
                duration={500} 
                >
                Contact
                </Link>
                </li>
            </ul>
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                    <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/andrew-perkins-a60b2527/" target="_blank">LinkedIn <FaLinkedin size={30} /></a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
                    <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/andrewperk" target="_blank">Github <FaGithub size={30} /></a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                    <a className="flex justify-between items-center w-full text-gray-300" href="mailto:andrewperk@gmail.com" target="_blank">Email <HiOutlineMail size={30} /></a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                    <a className="flex justify-between items-center w-full text-gray-300" href={Resume} target="_blank">Resume <BsFillPersonLinesFill size={30} /></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;