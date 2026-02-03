import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const sideMenuRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all bg-rose-50 duration-300 border-b ${isScrolled ? "bg-luxury-white/80 backdrop-blur-md py-4 border-luxury-black/10 shadow-sm" : "bg-transparent py-6 border-transparent"}`}>
      <div className="max-w-360 mx-auto flex items-center justify-between px-6 lg:px-[8%]">
        <a href="#top" className="font-serif text-3xl tracking-tighter text-luxury-black">
          Yewande<span className="text-luxury-gray">.</span>
        </a>

        <ul className='hidden md:flex items-center gap-10'>
          <li><a className="text-xs uppercase tracking-widest font-bold text-luxury-gray hover:text-luxury-black transition-colors" href="#top">Home</a></li>
          <li><a className="text-xs uppercase tracking-widest font-bold text-luxury-gray hover:text-luxury-black transition-colors" href="#about">About</a></li>
          <li><a className="text-xs uppercase tracking-widest font-bold text-luxury-gray hover:text-luxury-black transition-colors" href="#services">Services</a></li>
          <li><a className="text-xs uppercase tracking-widest font-bold text-luxury-gray hover:text-luxury-black transition-colors" href="#project">Project</a></li>
        </ul>

        <div className="flex items-center gap-6">
          <a href="#contact" className='hidden lg:flex items-center border border-luxury-black bg-luxury-black text-white px-8 py-2.5 rounded-full text-sm font-bold hover:bg-transparent hover:text-luxury-black transition-all duration-300'>
            Work with me
          </a>

          <button className="block md:hidden" onClick={openMenu}>
            <Image src="/menu-outline.png" alt="menu" width={24} height={24} className="w-6" />
          </button>
        </div>
      </div>

      <ul ref={sideMenuRef} className='flex md:hidden items-center bg-rose-50 flex-col gap-8 px-10 py-24 fixed top-0 bottom-0 -right-64 w-64 h-screen transition-transform duration-500 ease-in-out shadow-2xl z-50'>
        <div className="absolute right-8 top-8" onClick={closeMenu}>
          <Image src="/close-outline.png" alt="close" width={24} height={24} className="w-6 cursor-pointer" />
        </div>

        <li><a className="font-serif text-2xl" onClick={closeMenu} href="#top">Home</a></li>
        <li><a className="font-serif text-2xl" onClick={closeMenu} href="#about">About</a></li>
        <li><a className="font-serif text-2xl" onClick={closeMenu} href="#services">Services</a></li>
        <li><a className="font-serif text-2xl" onClick={closeMenu} href="#project">Project</a></li>
        <li><a className="font-serif text-2xl" onClick={closeMenu} href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};
export default NavBar;
