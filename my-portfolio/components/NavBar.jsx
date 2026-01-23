import React from "react";
const NavBar = () => {
  return (
    <nav className="w-full fixed flex items-center justify-between px-6 py-4 lg:px-8 xl:px-[8%] bg-white shadow-md z-50">
      <span>Yewande</span>
      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#myWork">My Work</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
      <div> <a href="#contact" className='hidden lg:flex items-center box-border border-2 border-black/50 justify-center px-8 py-3 ml-4 rounded-full hover:bg-gray-800 transition-all duration-200 ease-in-out'> Contact </a> </div>
    </nav>
  );
};
export default NavBar;