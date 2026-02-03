import React from 'react'
import Image from 'next/image';

const socialIcons = [
  {
    title: "GitHub",
    icon: "/logo-github.png",
    link: "https://github.com/Bigmehelen"
  },
  {
    title: "Instagram",
    icon: "/logo-instagram.png",
    link: "https://instagram.com"
  },
  {
    title: "Twitter",
    icon: "/logo-twitter.png",
    link: "https://twitter.com"
  },
  {
    title: "LinkedIn",
    icon: "/logo-linkedin.png",
    link: "https://www.linkedin.com/in/yewande-adepitan-63607930b"
  }
];

const Footer = () => {
  return (
    <footer className="w-full bg-luxury-white py-20 px-6 lg:px-[8%] border-t border-luxury-black/5">
      <div className="max-w-360 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="space-y-4 text-center md:text-left">
          <h2 className="font-serif text-3xl text-luxury-black tracking-tighter">
            Yewande<span className="text-luxury-gray">.</span>
          </h2>
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gray">
            Software Engineer & Product Designer
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-luxury-black hover:text-luxury-gray transition-colors pb-1 border-b border-transparent hover:border-luxury-gray"
            >
              <Image src={social.icon} alt={social.title} width={18} height={18} className="opacity-80 group-hover:opacity-100 transition-opacity" />
              {social.title}
            </a>
          ))}
        </div>

        <div className="text-right">
          <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-gray">
            © {new Date().getFullYear()} Adepitan Yewande Helen. <br />
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
