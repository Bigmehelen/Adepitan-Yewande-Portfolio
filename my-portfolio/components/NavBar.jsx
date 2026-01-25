import React,{useRef} from "react";
import Image from "next/image";
const NavBar = () => {
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    }
    
  return (
    <nav className="w-full fixed flex items-center fill-purple top-0 h-20 left-0 justify-between px-6 py-4 lg:px-8 xl:px-[8%] bg-white shadow-md z-50">
      <span className="font-Ovo text-3xl"> Yewande .</span>
      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-3 bg-white shadow-sm bg-opacity-50'>
        <li><a className="font-Ovo" href="#top">Home</a></li>
        <li><a className="font-Ovo" href="#about">About</a></li>
        <li><a className="font-Ovo" href="#services">Services</a></li>
        <li><a className="font-Ovo" href="#project">Project</a></li>
        <li><a className="font-Ovo" href="#contact">Contact Me</a></li>
      </ul>
      <div className="flex items-center, gap-4"> 
        <button>
            <Image src="/moon-outline.png" alt="" width={24} height={24} className="w-6" />
        </button>
        <a href="#contact" className='hidden lg:flex items-center box-border border-2 border-black/50 justify-center px-10 py-3 ml-4 rounded-full hover:bg-gray-800 transition-all duration-200 ease-in-out'> Contact </a> 

        <button className="block md:hidden ml-4"onClick={openMenu}>
            <Image src="/menu-outline.png" alt="menu" width={24} height={24} className="w-6 " />
        </button>
        </div>

        <ul ref = {sideMenuRef} className='flex md:hidden items-center flex-col gap-6 lg:gap-8 px-10 py-20 fixed top-0 bottom-0 -right-64 h-screen bg-rose-50 transition duration-500 ease-in-out shadow-sm bg-opacity-50'>
        
        <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src="/close-outline.png" alt="close" width={24} height={24} className="w-6 cursor-pointer"/>
        </div>

        <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
        <li><a className="font-Ovo" onClick={closeMenu} href="#about">About</a></li>
        <li><a className="font-Ovo" onClick={closeMenu}  href="#services">Services</a></li>
        <li><a className="font-Ovo" onClick={closeMenu} href="#project">Project</a></li>
        <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact Me</a></li>

      </ul>

    </nav>
  );
};
export default NavBar;