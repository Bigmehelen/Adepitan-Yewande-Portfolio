import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen justify-center flex flex-col items-center gap-4'>
        <div>
        <Image src="/wande.jpeg" alt="header" width={1920} height={1080} className='rounded-full w-40'/>
        </div>
        <h3 className='text-xl md:2xl mb-2 font-Ovo'> Hi! I'm Adepitan Yewande Helen </h3> 
        <h1 className='text-2xl md:text-5xl font-Ovo mb-2'> A Software Engineer </h1>
        <p className='max-w-2xl mx-auto font-Ovo'> I’m a software engineer with a strong interest in building reliable,
             user-focused applications. I enjoy turning complex problems into simple,
              scalable solutions and writing clean, maintainable code. 
              I’m always learning, experimenting with new technologies, 
              and looking for opportunities to grow as a developer while making a meaningful impact.
        </p>
        <div>
            <a href="#contact" className='flex items-center box-border border-2 border-black/50 bg-black text-white justify-center px-8 py-3 ml-4 rounded-full hover:bg-gray-800 transition-all duration-200 ease-in-out'>
            Contact Me <Image src="/arrow-forward-outline.png" alt="" width={24} height={24} className="w-6 ml-2" /> </a>
        </div>
    </div>
  )
}

export default Header